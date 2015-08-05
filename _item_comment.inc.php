<?php
/**
 * This is the template that displays a single comment
 *
 * This file is not meant to be called directly.
 *
 * b2evolution - {@link http://b2evolution.net/}
 * Released under GNU GPL License - {@link http://b2evolution.net/about/license.html}
 * @copyright (c)2003-2010 by Francois PLANQUE - {@link http://fplanque.net/}
 *
 * @package evoskins
 */
if( !defined('EVO_MAIN_INIT') ) die( 'Please, do not access this page directly.' );


// Default params:
$params = array_merge( array(
    'comment_start'  => '<div class="bComment">',
    'comment_end'    => '</div>',
	'link_to'		 => 'userurl>userpage',		// 'userpage' or 'userurl' or 'userurl>userpage' or 'userpage>userurl'
    'Comment'        => NULL, // This object MUST be passed as a param!
	), $params );

global $Item, $Skin;

/**
 * @var Comment
 */
$Comment = & $params['Comment'];

$liclass = '';
if( !empty($Comment->author_user_ID) )
{
	$liclass = 'byuser';
	if( !empty($Item) && $Comment->author_user_ID == $Item->creator_user_ID )
	{
		$liclass = ' bypostauthor';
	}
}
echo '<li class="comment depth-1 withAvatars '.$liclass.'">';
$Comment->anchor();

switch( $Comment->get( 'type' ) )
{
	case 'trackback': // Display a trackback:
		$c_title = $Skin->T_('Trackback').' '.$Skin->T_('from:');
		break;
	
	case 'pingback': // Display a pingback:
		$c_title = $Skin->T_('Pingback').' '.$Skin->T_('from:');
		break;
	
	case 'linkback': // Display a linkback:
		$c_title = $Skin->T_('Linkback').' '.$Skin->T_('from:');
		break;
		
	case 'comment': // Display a comment:
		if( empty($Comment->ID) )
		{	// PREVIEW comment
			$c_title = $Skin->T_('PREVIEW Comment from:');
		}
		else
		{	// Normal comment
			$c_title = '<a class="comment-id" href="'.$Comment->get_permanent_url().
						'">'.$Skin->T_('Comment').'</a> '.$Skin->T_('from:');
		}
	break;
}

echo '<div class="comment-head comment depth-1 withAvatars '.$liclass.'">';

$Comment->rating();

$comment_author = $Comment->get_author_name();
if( $cmt_url = $Comment->get_author_url() )
{
	$comment_author = '<a class="comment-author" href="'.$cmt_url.'" rel="nofollow">'.$Comment->get_author_name().'</a>';
}

$author_avatar = $Skin->get_avatar($Comment, 'crop-48x48');
if( $msg_url = $Skin->get_author_msgform_link($Comment) )
{
	$author_avatar = '<a href="'.$msg_url.'" title="'.$Skin->T_('Send email to comment author').'">'.$author_avatar.'</a>';
}

echo '<div class="avatar-box">'.$author_avatar.'</div>
		<div class="author"><span class="by">'.$c_title.' '.$comment_author.'</span><br />'.
		(mysql2date( locale_datefmt(), $Comment->date)).' @ '.(mysql2date( locale_timefmt(), $Comment->date)).'</div>';

echo '<div class="controls bubble">';
	$Comment->edit_link( '', ' ' );
	$Comment->delete_link( '', '' );
echo '</div>';

echo '</div><div class="comment-body clearfix">
		<div class="comment-text"><p>'.$Comment->get_content().'</p></div>
	  </div>';

?>

</li>