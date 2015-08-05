<?php
/**
 * This is the template that displays the item block
 *
 * This file is not meant to be called directly.
 * It is meant to be called by an include in the main.page.php template (or other templates)
 *
 * b2evolution - {@link http://b2evolution.net/}
 * Released under GNU GPL License - {@link http://b2evolution.net/about/license.html}
 * @copyright (c)2003-2010 by Francois PLANQUE - {@link http://fplanque.net/}
 *
 * @package evoskins
 */
if( !defined('EVO_MAIN_INIT') ) die( 'Please, do not access this page directly.' );

global $Plugins, $Item, $Skin, $c, $tb, $pb;

// Default params:
$params = array_merge( array(
		'<div class="post-content clear-block">',
		'feature_block'		=> false,
		'content_mode'		=> 'auto',		// 'auto' will auto select depending on $disp-detail
		'item_class'		=> 'bPost',
		'image_size'		=> 'fit-400x320',
		'before_more_link'	=> '<span class="more-link">',
		'after_more_link'	=> '</span>',
	), $params );


load_funcs( 'comments/model/_comment.funcs.php' );

// Comments counter
$c_number = @generic_ctp_number($Item->ID);

$post_class = ($disp=='posts') ? ' posts' : ' single';
if( $Item->is_featured() )
{
	$post_class .= ' featured';
}
?>

<div id="<?php $Item->anchor_id() ?>" class="<?php $Item->div_classes( $params ); echo $post_class; ?>" lang="<?php $Item->lang() ?>">

<?php
$Item->locale_temp_switch();
$Item->get_creator_User();

if( $Item->is_intro() )
{	// Intro post
	$title_tag = ($disp=='posts') ? 'h2' : 'h1';
	echo '<'.$title_tag.' class="title">';
	$Item->edit_link( array(
				'before' => '',
				'after'	=> ' ',
				'text'	=>	get_icon('edit'),
			) );
	$Item->title( array(
				'before' => '',
				'after' => '',
			));
	echo '</'.$title_tag.'>';
}
else
{
	if( ($disp == 'posts' && $Skin->get_setting('posts_author_avatar')) ||
		($disp != 'posts' && $Skin->get_setting('single_author_avatar')) )
	{	// Post author avatar
		echo '<a class="post-thumb alignleft" href="'.$Item->creator_User->get_userpage_url().
				'" title="'.$Item->creator_User->get_preferred_name().'">'.
				$Skin->get_avatar('author').'</a>';
	}
	
	$title_tag = ($disp=='posts') ? 'h2' : 'h1';
	echo '<'.$title_tag.' class="title">';
	$Item->edit_link( array(
				'before' => '',
				'after'	=> ' ',
				'text'	=>	get_icon('edit'),
			) );
	$Item->title( array(
				'before' => '',
				'after' => '',
			));
	echo '</'.$title_tag.'>';
	
	
	if( $disp == 'posts' )
	{	// Post list
		$Item->issue_date( array(
			'before'		=> '<div class="post-date"><p class="day">',
			'after'			=> '</p></div>',
			'date_format'	=> 'M jS',
		));
		
		$auth_name = $Item->get('t_author');
		$auth_url = $Item->creator_User->get_userpage_url();
		
		echo '<div class="post-info clearfix with-thumbs">
				<p class="author alignleft">'.$Skin->T_('Posted by').'
				<a href="'.$auth_url.'">'.$auth_name.'</a>';
		
		if( !$Item->is_featured() )
		{
			$Item->categories( array(
				  'before'          => ' '.$Skin->T_('in').' ',
				  'after'           => '',
				  'include_main'    => true,
				  'include_other'   => false,
				  'include_external'=> false,
				  'link_categories' => true,
			  ) );
		}
		
		echo '</p>';
				
		if( $Item->can_see_comments() )
		{
			$c_name = $Skin->T_('No comments');
			$no_comments = 'no ';
			if( !empty($c_number) )
			{
				$c_name = $c_number.' '.(($c_number == 1) ? $Skin->T_('comment') : $Skin->T_('comments'));
				$no_comments = '';
			}
			echo '<p class="comments alignright"><a href="'.$Item->get_permanent_url().
					'#comments" class="'.$no_comments.'comments">'.$c_name.'</a></p>';
		}
		echo '</div>';
	}
}

// POST CONTENT INCLUDED HERE
skin_include( '_item_content.inc.php', $params );

// List all tags attached to this post:
$Item->tags( array(
	  'before'		=> '<div class="post-tags" title="'.$Skin->T_('Tags').'">',
	  'after'		=> '</div>',
	  'separator'	=> ', ',
  ) );

if( $disp != 'posts' )
{	// Single posts
	// <div class="page-navigation"><p></p></div>
	
	$Item->categories( array(
		  'before'          => '<div class="post-tags post-cats" title="'.$Skin->T_('Categories').'">',
		  'after'           => '</div>',
		  'include_main'    => true,
		  'include_other'   => true,
		  'include_external'=> true,
		  'link_categories' => true,
	  ) );
	
	
	if( $Skin->get_setting('post_meta') ) :
	?>
   <table class="post-meta">
      <tr>
        <td><?php $Skin->shareThis() ?></td>
        <td><a class="control print"><?php echo $Skin->T_('Print article') ?></a> </td>
        <td class="details">
          <?php
          printf( $Skin->T_('This %1$s was posted by %2$s on %3$s at %4$s. Follow any responses to this post through %5$s.'),
				'<a href="'.$Item->get_permanent_url().'">'.$Skin->T_('entry').'</a>',
				'<a href="'.$Item->creator_User->get_userpage_url().'" title="'.$Skin->T_('Posts by').
				' '.$Item->creator_User->get_preferred_name().'">'.
				$Item->creator_User->get_preferred_name().'</a>',
				$Item->get_issue_date(),
				$Item->get_issue_date(array('date_format'=>locale_timefmt())),
				'<a href="'.url_add_param( $Item->get_permanent_url(), 
				'tempskin=_rss2&amp;disp=comments&amp;p='.$Item->ID ).'" title="RSS 2.0">RSS 2.0</a>' );
		  ?>
        </td>
      </tr>
    </table>
    <?php
	endif;
}

// "Post bottom" CONTAINER EMBEDDED HERE
skin_container( NT_('Post bottom'), array(
		'block_start'	=>	'<div class="PostBottom">',
		'block_end'		=>	'</div>',
	) );


// FEEDBACK (COMMENTS/TRACKBACKS) INCLUDED HERE
skin_include( '_item_feedback.inc.php', array(
		'before_section_title'	=> '<span class="comment_section_title">',
		'after_section_title'	=> '</span>',
		'form_title_start'		=> '<div class="comment_form_title">',
		'form_title_end'		=> '</div>',
		'comment_list_start'	=> '<ul id="comments" class="comments">',
		'comment_list_end'		=> '</ul>',
		'before_comment_error'	=> '<span class="comment_section_title">',
		'after_comment_error'	=> '</span>',
	) );

locale_restore_previous();

?>
</div>
