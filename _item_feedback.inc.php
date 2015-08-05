<?php
/**
 * This is the template that displays the feedback for a post
 * (comments, trackback, pingback...)
 *
 * You may want to call this file multiple time in a row with different $c $tb $pb params.
 * This allow to seprate different kinds of feedbacks instead of displaying them mixed together
 *
 * This file is not meant to be called directly.
 * It is meant to be called by an include in the main.page.php template.
 * To display a feedback, you should call a stub AND pass the right parameters
 * For example: /blogs/index.php?p=1&more=1&c=1&tb=1&pb=1
 * Note: don't code this URL by hand, use the template functions to generate it!
 *
 * b2evolution - {@link http://b2evolution.net/}
 * Released under GNU GPL License - {@link http://b2evolution.net/about/license.html}
 * @copyright (c)2003-2010 by Francois PLANQUE - {@link http://fplanque.net/}
 *
 * @package evoskins
 */
if( !defined('EVO_MAIN_INIT') ) die( 'Please, do not access this page directly.' );

?>
<!-- ===================== START OF FEEDBACK ===================== -->
<?php

// Default params:
$params = array_merge( array(
		'disp_comments'        => true,
		'disp_comment_form'    => true,
		'disp_trackbacks'      => true,
		'disp_trackback_url'   => true,
		'disp_pingbacks'       => true,
		'before_section_title' => '<h3>',
		'after_section_title'  => '</h3>',
		'comment_list_start'   => "\n\n",
		'comment_list_end'     => "\n\n",
		'comment_start'        => '<div class="bComment">',
		'comment_end'          => '</div>',
		'preview_start'        => '<div class="bComment" id="comment_preview">',
		'preview_end'          => '</div>',
		'attend_template'      => '_item_attend.inc.php',  // The template used for displaying post attending
		'attending_start'      => '<div class="bComment">',
		'attending_end'        => '</div>',
		'attend_list_start'    => '<table width="100%"><tbody align="center">',
		'attend_list_end'      => '</tbody></table>',
		'attend_line_start'    => '<tr>',
		'attend_line_end'      => '</tr>',
		'attend_start'         => '<td>',
		'attend_end'           => '</td>',
		'attend_user_field'    => 'login',	// 'login' or 'nickname' ( and everything what can be a param of User->disp() function )
		'comment_template'     => '_item_comment.inc.php',	// The template used for displaying individual comments (including preview)
		'link_to'		       => 'userurl>userpage',		    // 'userpage' or 'userurl' or 'userurl>userpage' or 'userpage>userurl'
		'form_title_start'     => '<h3>',
		'form_title_end'       => '</h3>',
	), $params );


global $c, $tb, $pb, $redir, $app_version, $Skin;

if( version_compare( $app_version, '4.1' ) > 0 )
{	// ----------------- ATTENDING INCLUDED HERE -----------------
	$Item->load_Blog();
	$item_Blog = $Item->get_Blog();
	$attending = $item_Blog->get_setting( 'allow_attending' );
	
	if( ! is_logged_in() )
	{ // don't show attending if user is not logged in
		$attending = 'never';
	}
	
	if( ( $attending == 'always' ) || ( ( $attending == 'enable_bypost' ) && $Item->get( 'attend_status' ) ) )
	{
		echo $params['before_section_title'];
		echo T_( 'Attending this event' );
		echo $params['after_section_title'];
	
		skin_include( $params['attend_template'], array(
					'Item'              => & $Item,
					'attending_start'   => $params['attending_start'],
					'attending_end'     => $params['attending_end'],
					'attend_list_start' => $params['attend_list_start'],
					'attend_list_end'   => $params['attend_list_end'],
					'attend_line_start' => $params['attend_line_start'],
					'attend_line_end'   => $params['attend_line_end'],
					'attend_start'      => $params['attend_start'],
					'attend_end'        => $params['attend_end'],
					'attend_user_field' => $params['attend_user_field'],
				) );
	}
	// -------------------- END OF ATTENDING ---------------------
}

if( empty($c) && empty($tb) && empty($pb) ) return;

// Comments counter
$c_number = @generic_ctp_number($Item->ID, 'comments');
$t_number = @generic_ctp_number($Item->ID, 'trackbacks');
$p_number = @generic_ctp_number($Item->ID, 'pingbacks');

global $disp;
			if ($disp=='page')
			{
				$title_links = $Skin->T_('Related Links');
			}
			else {
				
				$title_links = $Skin->T_('Related Posts');
				
				}

echo '<div class="tabbed-content post-tabs clearfix" id="post-tabs"><div class="tabs-wrap clearfix"><ul class="tabs"><li class="related-posts"><a href="#section-relatedPosts"><span>'.$title_links.'</span></a></li>';


if( $Item->can_see_comments() )
{
	// Set redir=no in order to open comment pages
	memorize_param( 'redir', 'string', '', 'no' );

	if( empty($c) )
	{	// Comments not requested
		$params['disp_comments'] = false;					// DO NOT Display the comments if not requested
		$params['disp_comment_form'] = false;			// DO NOT Display the comments form if not requested
	}
	
	if( empty($tb) || !$Blog->get( 'allowtrackbacks' ) )
	{	// Trackback not requested or not allowed
		$params['disp_trackbacks'] = false;				// DO NOT Display the trackbacks if not requested
		$params['disp_trackback_url'] = false;		// DO NOT Display the trackback URL if not requested
	}
	
	if( !empty($t_number) )
	{
		$params['disp_trackbacks'] = true;	
	}
	
	if( empty($pb) )
	{	// Pingback not requested
		$params['disp_pingbacks'] = false;				// DO NOT Display the pingbacks if not requested
	}
	
	if( $params['disp_trackbacks'] )
	{
		echo '<li class="trackbacks"><a href="#section-trackbacks"><span>'.
				$Skin->T_('Trackbacks').' ('.$t_number.')</span></a></li>';
	}
	
	if( $params['disp_comments'] )
	{
		echo '<li class="comments"><a href="#section-comments"><span>'.
				$Skin->T_('Comments').' ('.$c_number.')</span></a></li>';
	}
}

echo '</ul>
	  </div><!-- /tab nav -->
	  <!-- tab sections -->
	  <div class="sections">';


if( $Item->can_see_comments() && ($params['disp_comments'] || $params['disp_comment_form'] ||
	$params['disp_trackbacks'] || $params['disp_trackback_url'] ||
	$params['disp_pingbacks']) )
{
	
	$type_list = array();
	$disp_title = array();
	
	if( $params['disp_comments'] )
	{
		$type_list[] = 'comment';
	}
	
	if( $params['disp_trackbacks'] )
	{
		$type_list[] = 'trackback';
	}
	
	if( $params['disp_pingbacks'] )
	{
		$type_list[] = 'pingback';
	}
	
	echo '<div class="section clearfix" id="section-comments">
			<div id="comments-wrap"><div class="clearfix">';
	
	if( $params['disp_comments'] || $params['disp_trackbacks'] || $params['disp_pingbacks']  )
	{
		if( empty($c_number) )
		{	// No title yet
			if( $title = $Item->get_feedback_title( 'feedbacks', '', $Skin->T_('Feedback awaiting moderation'), $Skin->T_('Feedback awaiting moderation'), 'draft' ) )
			{ // We have some feedback awaiting moderation: we'll want to show that in the title
				$disp_title[] = $title;
			}
		}
	
		if( empty($c_number) && empty($disp_title) )
		{	// Still no title
			$disp_title[] = $Skin->T_('No feedback yet');
		}
		
		if( !empty($disp_title) )
		{
			echo $params['before_section_title'];
			echo implode( ', ', $disp_title);
			echo $params['after_section_title'];
		}
		
		$Skin->disp_feedback_list( 'comment', $params );
		echo '</div>';
	
		// Display count of comments to be moderated:
		$Item->feedback_moderation( 'feedbacks', '<div class="moderation_msg"><p>', '</p></div>', '',
				$Skin->T_('This post has 1 feedback awaiting moderation... %s'),
				$Skin->T_('This post has %d feedbacks awaiting moderation... %s') );
	}
	
	// ------------------ COMMENT FORM INCLUDED HERE ------------------
	skin_include( '_item_comment_form.inc.php', $params );
	// ---------------------- END OF COMMENT FORM ---------------------
	
	echo '</div></div>';
	
	
	if( $params['disp_trackbacks'] )
	{ // We want to display trackbacks:
	
		echo '<div class="section clearfix" id="section-trackbacks">
				<div id="trackbacks-wrap"><div class="clearfix">';
		
		if( $params['disp_trackback_url'] )
		{
			echo $params['before_section_title'];
			echo $Skin->T_('Trackback address for this post');
			echo $params['after_section_title'];
		
			/*
			 * Trigger plugin event, which could display a captcha form, before generating a whitelisted URL:
			 */
			if( ! $Plugins->trigger_event_first_true( 'DisplayTrackbackAddr', array('Item' => & $Item, 'template' => '<code>%url%</code>') ) )
			{ // No plugin displayed a payload, so we just display the default:
				echo '<p class="trackback_url"><code>'.$Item->get_trackback_url().'</code></p>';
			}
		}
		
		$params['comment_list_start'] = '<ul id="trackbacks" class="comments">';
		$Skin->disp_feedback_list( 'trackback', $params );
		
		echo '</div></div></div>';
	}
	
	// Restore "redir" param
	forget_param('redir');
}

// Related posts
echo $Skin->get_related_posts( $Skin->get_setting('display_related') );
echo '</div><!-- /tab sections --></div><!-- /tabbed content -->';

?>