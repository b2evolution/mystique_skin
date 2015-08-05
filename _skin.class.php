<?php
/**
 * This file implements a class derived of the generic Skin class in order to provide custom code for
 * the skin in this folder.
 *
 * @package skins
 *
 */
if( !defined('EVO_MAIN_INIT') ) die( 'Please, do not access this page directly.' );

/**
 * Specific code for this skin.
 *
 * ATTENTION: if you make a new skin you have to change the class name below accordingly
 */
class mystique_Skin extends Skin
{
	var $version = '2.1.0';
	
	
	/**
	 * Get default name for the skin.
	 * Note: the admin can customize it.
	 */
	function get_default_name()
	{
		return 'Mystique';
	}


	/**
	 * Get default type for the skin.
	 */
	function get_default_type()
	{
		return 'normal';
	}
	
	
	/**
	 * Get definitions for editable params
	 *
	 * @see Plugin::GetDefaultSettings()
	 * @param local params like 'for_editing' => true
	 */
	function get_param_definitions( $params )
	{
		global $Blog, $app_version;
		global $skins_url;

		if( !$twitter_name = $Blog->get_setting('twitter_username') )
		{
			$twitter_name = '';
		}
		
		$set1 = array(
			'section_general_start' => array(
				'layout' => 'begin_fieldset',
				'label'  => T_('General Settings')
			),
				'blog_name' => array(
					'label' => $this->T_('Blog title'),
					'note' => $this->T_('Enter image URL to display a logo'),
					'defaultvalue' => $Blog->get('name'),
					'type' => 'text',
					'size' => 50,
				),
				'blog_tagline' => array(
					'label' => $this->T_('Blog tagline'),
					'defaultvalue' => $Blog->get('tagline'),
					'type' => 'text',
					'size' => 50,
				),
			'section_general_end' => array(
				'layout' => 'end_fieldset',
			),

			'section_colorbox_start' => array(
					'layout' => 'begin_fieldset',
					'label'  => T_('Colorbox Image Zoom')
				),
					'colorbox' => array(
						'label' => T_('Colorbox Image Zoom'),
						'note' => T_('Check to enable javascript zooming on images (using the colorbox script)'),
						'defaultvalue' => 1,
						'type' => 'checkbox',
					),
					'colorbox_vote_post' => array(
						'label' => T_('Voting on Post Images'),
						'note' => T_('Check this to enable AJAX voting buttons in the colorbox zoom view'),
						'defaultvalue' => 1,
						'type' => 'checkbox',
					),
					'colorbox_vote_post_numbers' => array(
						'label' => T_('Display Votes'),
						'note' => T_('Check to display number of likes and dislikes'),
						'defaultvalue' => 1,
						'type' => 'checkbox',
					),
					'colorbox_vote_comment' => array(
						'label' => T_('Voting on Comment Images'),
						'note' => T_('Check this to enable AJAX voting buttons in the colorbox zoom view'),
						'defaultvalue' => 1,
						'type' => 'checkbox',
					),
					'colorbox_vote_comment_numbers' => array(
						'label' => T_('Display Votes'),
						'note' => T_('Check to display number of likes and dislikes'),
						'defaultvalue' => 1,
						'type' => 'checkbox',
					),
					'colorbox_vote_user' => array(
						'label' => T_('Voting on User Images'),
						'note' => T_('Check this to enable AJAX voting buttons in the colorbox zoom view'),
						'defaultvalue' => 1,
						'type' => 'checkbox',
					),
					'colorbox_vote_user_numbers' => array(
						'label' => T_('Display Votes'),
						'note' => T_('Check to display number of likes and dislikes'),
						'defaultvalue' => 1,
						'type' => 'checkbox',
					),
			'section_colorbox_end' => array(
				'layout' => 'end_fieldset',
			),

			'section_username_start' => array(
				'layout' => 'begin_fieldset',
				'label'  => T_('Username options')
			),
				'gender_colored' => array(
					'label' => T_('Display gender'),
					'note' => T_('Use colored usernames to differentiate men & women.'),
					'defaultvalue' => 0,
					'type' => 'checkbox',
				),
				'bubbletip' => array(
					'label' => T_('Username bubble tips'),
					'note' => T_('Check to enable bubble tips on usernames'),
					'defaultvalue' => 0,
					'type' => 'checkbox',
				),
				'autocomplete_usernames' => array(
					'label' => T_('Autocomplete usernames'),
					'note' => T_('Check to enable auto-completion of usernames entered after a "@" sign in the comment forms'),
					'defaultvalue' => 1,
					'type' => 'checkbox',
				),
			'section_username_end' => array(
				'layout' => 'end_fieldset',
			),
		);

		if ( version_compare( $app_version, '6.0', '>=' ) )
		{ // We need this due to 'checklist' fields are available starting with version 6.
			$set2 = array(
				'section_access_start' => array(
					'layout' => 'begin_fieldset',
					'label'  => T_('When access is denied or requires login...')
				),
					'access_login_containers' => array(
						'label' => T_('Display on login screen'),
						'note' => '',
						'type' => 'checklist',
						'options' => array(
							array( 'header',   sprintf( T_('"%s" container'), NT_('Header') ),    1 ),
							array( 'page_top', sprintf( T_('"%s" container'), NT_('Page Top') ),  1 ),
							array( 'menu',     sprintf( T_('"%s" container'), NT_('Menu') ),      0 ),
							array( 'sidebar',  sprintf( T_('"%s" container'), NT_('Sidebar') ),   0 ),
							array( 'sidebar2', sprintf( T_('"%s" container'), NT_('Sidebar 2') ), 0 ),
							array( 'footer',   sprintf( T_('"%s" container'), NT_('Footer') ),    1 ) ),
						),
				'section_access_end' => array(
					'layout' => 'end_fieldset',
				),
			);

			$set1 = array_merge($set1, $set2);
		}

		$set3 = array(
			'2_start' => array(
				'layout' => 'begin_fieldset',
				'label' => $this->T_('Layout'),
			),
			'skin_color' => array(
				'label' => $this->T_('Skin color'),
				'note' => '',
				'defaultvalue' => 'green',
				'options' => array(
						'green' => $this->T_('Green'),
						'blue' => $this->T_('Blue'),
						'red' => $this->T_('Red'),
						'grey' => $this->T_('Grey'),
					),
				'type' => 'select',
			),
			'skin_width' => array(
				'label' => $this->T_('Skin width'),
				'note' => '',
				'defaultvalue' => 'fixed',
				'options' => array(
						'fixed' => $this->T_('Fixed'),
						'fluid' => $this->T_('Fluid'),
					),
				'type' => 'select',
			),
			'skin_layout' => array(
				'label' => $this->T_('Skin layout'),
				'note' => '',
				'defaultvalue' => 'col-2-right',
				'options' => array(
						'col-1' => $this->T_('1 column'),
						'col-2-right' => $this->T_('2 columns: Sidebar to the right'),
						'col-2-left' => $this->T_('2 columns: Sidebar to the left'),
						'col-3' => $this->T_('3 columns'),
						'col-3-right' => $this->T_('3 columns: Sidebars to the right'),
						'col-3-left' => $this->T_('3 columns: Sidebars to the left'),
					),
				'type' => 'select',
			),
			'skin_font' => array(
				'label' => $this->T_('Skin font'),
				'note' => '',
				'defaultvalue' => '"Segoe UI",Calibri,"Myriad Pro",Myriad,"Trebuchet MS",Helvetica,Arial,sans-serif',
				'options' => array(
						'"Segoe UI",Calibri,"Myriad Pro",Myriad,"Trebuchet MS",Helvetica,Arial,sans-serif' => 'Segoe UI (Windows Vista/7)',
						'"Helvetica Neue",Helvetica,Arial,Geneva,"MS Sans Serif",sans-serif' => 'Helvetica/Arial',
						'Georgia,"Nimbus Roman No9 L",serif' => 'Georgia (sans serif)',
						'"Lucida Grande","Lucida Sans","Lucida Sans Unicode","Helvetica Neue",Helvetica,Arial,Verdana,sans-serif' => 'Lucida Grande/Sans (Mac/Windows)',
					),
				'type' => 'select',
			),
			'2_end' => array(
				'layout' => 'end_fieldset',
			),
			'3_start' => array(
				'layout' => 'begin_fieldset',
				'label' => $this->T_('Tabbed widget settings'),
			),
			'tabbed_widget' => array(
				'label' => $this->T_('Tabbed widget'),
				'note' => $this->T_('Display javascript tabbed widget on the sidebar'),
				'defaultvalue' => 1,
				'type' => 'checkbox',
			),
			'display_comments' => array(
				'label' => $this->T_('Recent comments'),
				'note' => $this->T_('The number of recent comments'),
				'defaultvalue' => 6,
				'type' => 'integer',
				'size' => 3,
			),
			'display_archives' => array(
				'label' => $this->T_('Archives'),
				'note' => $this->T_('The number of months in archive'),
				'defaultvalue' => 12,
				'type' => 'integer',
				'size' => 3,
			),
			'display_tags' => array(
				'label' => $this->T_('Tags'),
				'note' => $this->T_('The number of tags'),
				'defaultvalue' => 40,
				'type' => 'integer',
				'size' => 3,
			),
			'3_end' => array(
				'layout' => 'end_fieldset',
			),
			'4_start' => array(
				'layout' => 'begin_fieldset',
				'label' => $this->T_('Misc settings'),
			),
			'display_related' => array(
				'label' => $this->T_('Related posts'),
				'note' => $this->T_('The number of related articles in single post mode'),
				'defaultvalue' => 10,
				'type' => 'integer',
				'size' => 3,
			),
			'display_my_tweets' => array(
				'label' => $this->T_('Twitter widget'),
				'note' => $this->T_('The number of items in "My latest tweets" widget. Select 0 to disable.'),
				'defaultvalue' => 5,
				'type' => 'integer',
				'size' => 3,
			),
			'4_end' => array(
				'layout' => 'end_fieldset',
			),
			'5_start' => array(
				'layout' => 'begin_fieldset',
				'label' => $this->T_('Enable/disable features'),
			),
			'fancy_helper' => array(
				'label' => $this->T_('FancyBox Helper'),
				'note' => $this->T_('See <a href="'.$skins_url.$this->get_default_name().'/resources/fancyapps/demo/index.html" target="_blank"> Demo</a>  and <a href="'.$skins_url.$this->get_default_name().'/resources/fancyapps/demo/readme.html" target="_blank">Added Features</a> or visit <a href="http://fancyapps.com/fancybox/" target="_blank">fancyBox</a>'),
				'defaultvalue' => 0,
				'type' => 'checkbox',
			),
			'post_meta' => array(
				'label' => $this->T_('Post metadata'),
				'note' => $this->T_('Display post metadata block in single post mode'),
				'defaultvalue' => 1,
				'type' => 'checkbox',
			),
			'posts_author_avatar' => array(
				'label' => $this->T_('Author avatar (list)'),
				'note' => $this->T_('Display author avatar next to post title in <u>post list mode</u>'),
				'defaultvalue' => 1,
				'type' => 'checkbox',
			),
			'single_author_avatar' => array(
				'label' => $this->T_('Author avatar (single)'),
				'note' => $this->T_('Display author avatar next to post title in <u>single post mode</u>'),
				'defaultvalue' => 1,
				'type' => 'checkbox',
			),
			'enable_thumbshots' => array(
				'label' => $this->T_('Display thumbshots'),
				'note' => $this->T_('Display website previews on external post links.').
							' (Website thumbnails provided by <a href="http://www.thumbshots.ru/en/" target="_blank">Thumbshots.RU</a>)',
				'defaultvalue' => 1,
				'type' => 'checkbox',
			),
			'display_credits' => array(
				'label' => $this->T_('Display footer credits'),
				'note' => $this->T_('You get this skin for free. We do appreciate you giving us credit. <b>Thank you for your support!</b>'),
				'defaultvalue' => 1,
				'type' => 'checkbox',
			),
			'5_end' => array(
				'layout' => 'end_fieldset',
			),
			'6_start' => array(
				'layout' => 'begin_fieldset',
				'label' => $this->T_('Social buttons'),
			),
			'facebook_user' => array(
				'label' => $this->T_('Facebook'),
				'note' => $this->T_('Username. Leave empty to hide the button'),
				'defaultvalue' => 'b2evolution',
				'type' => 'text',
				'size' => 40,
			),
			'flickr_user' => array(
				'label' => $this->T_('Flickr'),
				'note' => $this->T_('Username. Leave empty to hide the button'),
				'type' => 'text',
				'size' => 40,
			),
			'myspace_user' => array(
				'label' => $this->T_('Myspace'),
				'note' => $this->T_('Username. Leave empty to hide the button'),
				'type' => 'text',
				'size' => 40,
			),
			'linkedin_user' => array(
				'label' => $this->T_('LinkedIn'),
				'note' => $this->T_('Username. Leave empty to hide the button'),
				'type' => 'text',
				'size' => 40,
			),
			'twitter_user' => array(
				'label' => $this->T_('Twitter'),
				'note' => $this->T_('Username. Leave empty to hide the button'),
				'defaultvalue' => $twitter_name,
				'type' => 'text',
				'size' => 40,
			),
			'youtube_user' => array(
				'label' => $this->T_('Youtube'),
				'note' => $this->T_('Username. Leave empty to hide the button'),
				'defaultvalue' => '',
				'type' => 'text',
				'size' => 40,
			),
		);

		$set = array_merge($set1, $set3);
		
		if( version_compare($app_version, '4') && ($res = $this->check_updates()) )
		{	// Check for updates in b2evo v4 and up
			$set = array( 'updates' => array(
					'label' => $this->T_('Updates'),
					'info' => sprintf( '<span style="color:red; font-weight:bold">New version %s is available. %s</span>', $res['version'], get_icon('download').' <a href="'.$res['url'].'" target="_blank">Download now</a>' ),
					'type' => 'info',
				) ) + $set;
		}
		
		return array_merge( $set, parent::get_param_definitions( $params ) );
	}
	
	
	/**
	 * Get ready for displaying the skin.
	 */
	function display_init()
	{
		require_js( '#jquery#' );
		
		add_headline('<!--[if lte IE 6]> <script type="text/javascript"> isIE6 = true; isIE = true; </script> <![endif]-->
					  <!--[if gte IE 7]> <script type="text/javascript"> isIE = true; </script> <![endif]-->');

		require_js( 'resources/jquery.mystique.js', true );


		if( $this->get_setting('fancy_helper') ) 
		{

			require_js( 'resources/jquery.custom.fancy.js', true );

			add_headline('<!-- Add Thumbnail helper (this is optional) -->');	

			require_css( 'resources/helpers/jquery.fancybox-thumbs.css', true );
			require_js( 'resources/helpers/jquery.fancybox-thumbs.js', true );

			require_css( 'resources/helpers/jquery.fancybox-buttons.css', true );
			require_js( 'resources/helpers/jquery.fancybox-buttons.js', true );
		}
		/*
		<script language="javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js" type="text/javascript"></script>
		<script language="javascript" src="/tweet/jquery.tweet.js" type="text/javascript"></script> 
		*/

		if( $this->get_setting('enable_thumbshots') )
		{	// Display thumbshots
			add_js_headline('jQuery(document).ready(function() {
			if( ThumbsLinks = jQuery(".bText a[href^=\'http:\']").not("[href*=\'" + window.location.host + "\']") )
			{
				ThumbshotPopups("thumbshot", ThumbsLinks);
			}
			})');
		}
		
		add_css_headline(' * {font-family: '.$this->get_setting('skin_font').'}' );
		require_css( 'resources/color-'.$this->get_setting('skin_color').'.css', true );

		// call parent:
		parent::display_init();
	}
	
	
	// Get gravatar URL
	function disp_gravatar_image( $Comment, $params = array() )
	{
		global $skins_url;
		
		if( empty($Comment) ) return false;
		
		$params = array_merge( array(
					'default'	=> $skins_url.'mystique/images/gravatar.jpg',
					'size'		=> '48',
				), $params );
		
		$url = 'http://www.gravatar.com/avatar.php?gravatar_id='.md5( $Comment->get_author_email() );
		
		if( !empty($params['rating']) )
			$url .= '&rating='.$params['rating'];
			
		if( !empty($params['size']) )
			$url .='&size='.$params['size'];
			
		if( !empty($params['default']) )
			$url .= '&default='.urlencode($params['default']);
			
		if( !empty($params['border']) )
			$url .= '&border='.$params['border'];
		
		$img = '<img src="'.$url.'" class="comment_gravatar" title="'.$Comment->get_author_name().'" alt="'.$Comment->get_author_name().'" />';
		
		return $img;
	}
	
	
	function display_list_comments( $limit = 6 )
	{
		global $Blog, $app_version;
		
		if( version_compare( $app_version, '4.0' ) < 0 )
		{
			$CommentList = new CommentList( $Blog, "'comment'", array('published'), '', '', 'DESC', '', $limit );
		}
		else
		{
			$CommentList = new CommentList2( $Blog, $limit );

			// Filter list:
			$CommentList->set_filters( array(
					'types' => array('comment'),
					'statuses' => array('published'),
					'post_ID' => NULL,
					'order' => 'DESC',
				) );
		
			// Get ready for display (runs the query):
			$CommentList->display_init();
		}
		
		if( $CommentList->result_num_rows > 0 )
		{
			while( $Comment = & $CommentList->get_next() )
			{
				$Comment->get_Item();
				
				echo '<li class="clearfix"><a class="fadeThis" href="'.
						$Comment->get_permanent_url().'"><span class="avatar post-thumb">'.
						$this->get_avatar($Comment,'crop-48x48',48).'</span><span class="clearfix entry">'.
						$Comment->get_author_name().': <span class="details">'.
						strmaxlen( $Comment->get_content('text'), 60 ).'</span></span></a></li>';
			}
		}
		return false;
	}
	
	
	function get_avatar( $Comment = '#', $size = 'crop-64x64', $gr_size = '48' )
	{
		global $Item, $current_User, $app_version;

		switch( $Comment )
		{
			case 'author': // Get post author avatar
				if( !empty($Item) )
				{
					$Item->get_creator_User();
					return $Item->creator_User->get_avatar_imgtag($size);
				}
				break;
			
			case 'user': // Get user avatar
				if( !empty($current_User) )
				{
					return $current_User->get_avatar_imgtag($size);
				}
				break;
			
			default: // Comment author avatar
				if( version_compare( $app_version, '4.0' ) > 0 )
				{	// b2evo 4 and up
					return $Comment->get_avatar( $size, 'avatar', array('size'=>$gr_size) );
				}
				else
				{
					return $this->disp_gravatar_image($Comment);
				}
		}
	}
	
	
	function display_twitter_widget( $limit = '#' )
	{
		if( (!$user = $this->get_setting('twitter_user')) || $this->get_setting('display_my_tweets') == 0 ) return;
		if( $limit == '#' ) $limit = $this->get_setting('display_my_tweets');
		
		echo '<li class="block">
			  <div class="block-twitter">
				<h3 class="title"><span>'.$this->T_('My latest tweets').'</span></h3>
				<div class="block-div"></div>
				<div class="block-div-arrow"></div>
				<div class="clearfix">
				  <div class="avatar"></div>
				  <div class="info"></div>
				</div>
				
				<script type="text/javascript">
				    jQuery(function($){
				        $(".tweet").tweet({
				            twitter_api_proxy_url: "/twitterproxy.ashx",
				            username: "'.$user.'",
				            join_text: "auto",
				            avatar_size: 32,
				            count: 3,
				            auto_join_text_default: "we said,",
				            auto_join_text_ed: "we",
				            auto_join_text_ing: "we were",
				            auto_join_text_reply: "we replied to",
				            auto_join_text_url: "we were checking out",
				            loading_text: "loading tweets..."
				        });
				    });
				</script>

				<div class="twitter-content"></div>
				<div class="tweet clearfix"></div> 
				<a class="followMe" href="http://www.twitter.com/'.$user.'"><span>'.$this->T_('Follow me on Twitter!').'</span></a>
				
				</div>
              </li>';
		
		return;
	}
	
	function display_list_archives( $limit = 12 )
	{
		global $Plugins;
		
		ob_start();
		$Plugins->call_by_code( 'evo_Arch', array(
				'block_start' => '',
				'block_end' => '',
				'block_title_start' => '',
				'block_title_end' => '',
				'list_start' => '',
				'list_end' => '',
				'limit' => $limit,
			) );
		
		$widget_arc = ob_get_clean();
		
		if( $widget_arc_fixed = @preg_replace( '~<a(.*?)>(.*?)</a>(.*?)<span\sclass="dimmed">(.*?)</span>~',
					'<a class="fadeThis" $1><span class="entry">$2$3<span class="details inline">$4</span></span></a>',
					$widget_arc ) )
		{
			echo $widget_arc_fixed;
		}
		else
		{
			echo $widget_arc;
		}
	}
	
	
	function display_list_cats( $option_all = '' )
	{
		global $Plugins;
		
		ob_start();
		skin_widget( array(
			// CODE for the widget:
			'widget' => 'coll_category_list',
			// Optional display params
			'block_start'			=> '',
			'block_end'				=> '',
			'block_title_start'		=> '',
			'block_title_end'		=> '',
			'block_display_title'	=> false,
			'list_start'			=> '',
			'list_end'				=> '',
			'item_start'			=> '<li class="cat-item">',
			'option_all'			=> $option_all, // T_('All')
		) );
		
		$widget_cat = ob_get_clean();
		
		if( $widget_cat_fixed = @preg_replace( '~<a(.*?)href="(.*?)">(.*?)</a>~',
					'<a class="fadeThis" $1href="$2"><span class="entry">$3</span></a><a href="$2?tempskin=_rss2" class="rss bubble"></a>',
					$widget_cat ) )
		{
			echo $widget_cat_fixed;
		}
		else
		{
			echo $widget_cat;
		}
	}
	
	
	function display_tabbed_widget()
	{
		if( ! $this->get_setting( 'tabbed_widget' ) ) return;
		
		?>
        <!-- tabbed content -->
        <li class="block">
          <div class="block-sidebar_tabs">
            <div class="tabbed-content sidebar-tabs clearfix" id="instance-sidebartabswidget">
              <ul class="box-tabs clearfix">
              	<?php
                echo '<li class="recentcomm"><a href="#instance-sidebartabswidget-section-recentcomments"
							title="'.$this->T_('Recent comments').'"><span>'.$this->T_('Recent comments').'</span></a></li>
                		<li class="archives"><a href="#instance-sidebartabswidget-section-archives"
							title="'.$this->T_('Archives').'"><span>'.$this->T_('Archives').'</span></a></li>
                		<li class="tags"><a href="#instance-sidebartabswidget-section-tags"
							title="'.$this->T_('Tags').'"><span>'.$this->T_('Tags').'</span></a></li>
               			<li class="categories"><a href="#instance-sidebartabswidget-section-categories"
							title="'.$this->T_('Categories').'"><span>'.$this->T_('Categories').'</span></a></li>';
				?>
              </ul>
              <!-- tab sections -->
              <div class="sections">
                <div class="box section" id="instance-sidebartabswidget-section-categories">
                  <div class="box-top-left"><div class="box-top-right"></div></div>
                  <div class="box-main">
                    <div class="box-content">
                      <ul class="menuList categories"><?php $this->display_list_cats(); ?></ul>
                    </div>
                  </div>
                </div>
                <div class="box section" id="instance-sidebartabswidget-section-tags">
                  <div class="box-top-left"><div class="box-top-right"></div></div>
                  <div class="box-main">
                    <div class="box-content">
                      <div class="tag-cloud">
                        <?php
						  skin_widget( array(
							  // CODE for the widget:
							  'widget' => 'coll_tag_cloud',
							  // Optional display params
							  'block_start' => '',
							  'block_end' => '',
							  'block_display_title' => false,
							  'tag_cloud_start' => '',
							  'tag_cloud_end' => '',
							  'tag_separator' => "\n",
							  'tag_min_size' => 8,
							  'tag_max_size' => 20,
							  'max_tags' => $this->get_setting('display_tags'),
						  ) );
						  ?>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="box section" id="instance-sidebartabswidget-section-archives">
                  <div class="box-top-left"><div class="box-top-right"></div></div>
                  <div class="box-main">
                    <div class="box-content">
                      <ul class="menuList"><?php $this->display_list_archives( $this->get_setting('display_archives') ); ?></ul>
                    </div>
                  </div>
                </div>
                <div class="box section" id="instance-sidebartabswidget-section-recentcomments">
                  <div class="box-top-left"><div class="box-top-right"></div></div>
                  <div class="box-main">
                    <div class="box-content">
                      <ul class="menuList recentcomm"><?php $this->display_list_comments( $this->get_setting('display_comments') ); ?></ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- tabbed content -->
          </div>
        </li>
        <!-- /tabbed content -->
        <?php
	}
	
	
	function display_footer()
	{
		global $Blog;
		
		echo '<div id="copyright"><div><a class="rss-subscribe" href="'.
				$Blog->get( 'rss2_url' ).'" title="RSS Feeds">RSS Feed</a>
				'.$this->get_links().'
				<a id="goTop" class="js-link" name="goTop">Top</a></div>
				<div class="credits">Original Mystique theme by <a href="http://digitalnature.ro">digitalnature</a> |
				<a href="http://www.sonorth.com/tech/">b2evolution skin</a> by Sonorth Corp. |
				Powered by <a href="http://b2evolution.net">b2evolution</a></div>
             </div>';
	}
	
	
	function display_footer_container()
	{
		global $Blog, $app_version;
		
		if( version_compare( $app_version, '4.0' ) < 0 )
		{	// b2evo 3
			$WidgetCache = & get_Cache('WidgetCache');
		}
		else
		{	// b2evo 4 and up
			$WidgetCache = & get_WidgetCache();
		}
		
		$fwcount = 0;
		if( $Widget_array = $WidgetCache->get_by_coll_container( $Blog->ID, 'Footer' ) )
		{
			foreach( $Widget_array as $ComponentWidget )
			{
				if( $ComponentWidget->enabled ) $fwcount++;
			}
		}
		if( $fwcount < 1 ) $fwcount = 1;
		
		echo '<ul class="blocks widgetcount-'.$fwcount.'">';

		// "Footer" CONTAINER EMBEDDED HERE
		skin_container( NT_('Footer'), array(
				// This will enclose each widget in a block:
				'block_start' => '<li class="block"><div class="block-content clearfix">',
				'block_end' => '</div></li>',
				// This will enclose the title of each widget:
				'block_title_start' => '<h4 class="title">',
				'block_title_end' => '</h4>',
				// If a widget displays a list, this will enclose that list:
				'list_start' => '<ul>',
				'list_end' => '</ul>',
				// This will enclose each item in a list:
				'item_start' => '<li class="page_item">',
				'item_end' => '</li>',
				// This will enclose sub-lists in a list:
				'group_start' => '<ul>',
				'group_end' => '</ul>',
				// This will enclose (foot)notes:
				'notes_start' => '<div class="notes">',
				'notes_end' => '</div>',
			) );
		
		echo '</ul>';
	}
	
	
	function get_links()
	{
		if( ! $this->get_setting('display_credits') ) return '';
		
		$crls = array (
			array ( 'http://www.thumbshots.ru/en/', 'Website thumbnails by Thumbshots.RU', 'Website thumbnails' ),
			array ( 'http://www.sonorth.com/tech/', 'Orlando computer services and PC repair', 'Orlando Computer Services' ),
			array ( 'http://b2evo.sonorth.com/show.php/b2evolution-freelance-work', 'b2evolution services', 'b2evolution services' )
		  );
		
		$link = $crls[rand(0,(count($crls)-1))];
		return '<a class="clink" href="'.$link[0].'" title="'.$link[1].'">'.$link[2].'</a>';
	}
	
	
	function shareThis()
	{
		global $Item, $Blog;
		
		if( method_exists( $Item, 'get_tinyurl' ) )
		{
			$url = urlencode($Item->get_tinyurl());
		}
		if( empty($url) )
		{
			$url = urlencode(url_add_param( $Blog->get('url'), 'p='.$Item->ID ));
		}
		
		$content = format_to_output( $Item->get_excerpt(), 'htmlattr' );
		$title = format_to_output( $Item->title, 'htmlattr' );
		
		?>
		<div class="shareThis clear-block"><a href="#" class="control share"><?php echo $this->T_('Share this post!') ?></a>
		  <ul class="bubble">
			<li><a href="http://twitter.com/home?status=<?php echo $title ?>+-+<?php echo $url ?>" class="twitter" title="Tweet This!"><span>Twitter</span></a></li>
			<li><a href="http://digg.com/submit?phase=2&amp;url=<?php echo $url ?>&amp;title=<?php echo $title ?>" class="digg" title="Digg this!"><span>Digg</span></a></li>
			<li><a href="http://www.facebook.com/share.php?u=<?php echo $url ?>&amp;t=<?php echo $title ?>" class="facebook" title="Share this on Facebook"><span>Facebook</span></a></li>
			<li><a href="http://del.icio.us/post?url=<?php echo $url ?>&amp;title=<?php echo $title ?>" class="delicious" title="Share this on del.icio.us"><span>Delicious</span></a></li>
			<li><a href="http://www.stumbleupon.com/submit?url=<?php echo $url ?>&amp;title=<?php echo $title ?>" class="stumbleupon" title="Stumbled upon something good? Share it on StumbleUpon"><span>StumbleUpon</span></a></li>
			<li><a href="http://www.google.com/bookmarks/mark?op=add&amp;bkmk=<?php echo $url ?>&amp;title=<?php echo $title ?>" class="google" title="Add this to Google Bookmarks"><span>Google Bookmarks</span></a></li>
			<li><a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=<?php echo $url ?>&amp;title=<?php echo $title ?>&amp;summary=<?php echo $content ?>&amp;source=<?php $Blog->disp('name') ?>" class="linkedin" title="Share this on Linkedin"><span>LinkedIn</span></a></li>
			<li><a href="http://buzz.yahoo.com/buzz?targetUrl=<?php echo $url ?>&amp;headline=<?php echo $title ?>&amp;summary=<?php echo $content ?>" class="yahoo" title="Buzz up!"><span>Yahoo Bookmarks</span></a></li>
			<li><a href="http://technorati.com/faves?add=<?php echo $url ?>" class="technorati" title="Share this on Technorati"><span>Technorati Favorites</span></a></li>
		  </ul>
		</div>
		<?php
	}
	
	
	function body_class()
	{
		global $disp;
		
		$r = $this->get_setting('skin_layout').' '.$this->get_setting('skin_width');
		
		if( $disp != 'posts' )
		{
			$r .= ' single-post';
		}
		echo $r;
	}
	
	
		/**
		*	Get related items (Posts/Pages)
		*	
		*	@param array of params
		*
		*	@param string Output format, see {@link format_to_output()}
		*	
		*	return: display
		*
		*	$achillis 2013-11-11
		*
		**/	
		
		function get_related_posts( $limit = 10 )
			{
		
				global $disp;
	
				if ($disp=='page')
				{
				
					ob_start();

						skin_widget( array(
						// CODE for the widget:
							'widget' => 'coll_item_list',
							'block_start' => '',
							  'block_end' => '',
							  'block_display_title' => false,
							  'list_start' => '<ul id="relatedPosts" class="relatedPosts">',
							  'list_end' => '</ul>',
							  'item_start' => '<li><h3 class="title">',
							  'item_end' => '</h3></li>',
							  'order_dir' => 'DESC', //ASC
							  'order_by' => 'datestart', //priority, order
							  'disp_excerpt' => false,
							  'limit' => $limit,
							  'item_type' => '1000', //Page only
							  'follow_mainlist' => 'tags',
							  'block_display_title' => false,
							  'disp_excerpt' => false
							  
							) );
	
						$rel_posts = ob_get_clean();
	
				}
				else {
	
						ob_start();
							skin_widget( array(
								  // CODE for the widget:
								  'widget' => 'coll_related_post_list',
								  // Optional display params
								  'block_start' => '',
								  'block_end' => '',
								  'block_display_title' => false,
								  'list_start' => '<ul id="relatedPosts" class="relatedPosts">',
								  'list_end' => '</ul>',
								  'item_start' => '<li><h3 class="title">',
								  'item_end' => '</h3></li>',
								  'order_dir' => 'DESC',
								  'order_by' => 'datestart',
								  'disp_excerpt' => false,
								  'limit' => $limit,
							  ) );

							$rel_posts = ob_get_clean();
				}
		
			$r = '<div class="section clearfix" id="section-relatedPosts">';
			
			if( !empty($rel_posts) )
		{
			$r .= '<div id="relatedPosts-wrap"><div class="clearfix">';
			$r .= $rel_posts;
			$r .= '</div></div>';
		}
		else
		{

			if ($disp=='page'){ $r .= '<span class="comment_section_title">'.$this->T_('No related Links yet').'</span>';}
			else {$r .= '<span class="comment_section_title">'.$this->T_('No related posts yet').'</span>';}
			

		}
		
		$r .= '</div>';
		
		return $r;
	}
	
	
	function disp_feedback_list( $type = 'comment', $params = array() )
	{
		global $Blog, $Item, $app_version;
		
		$type_list = array($type);
		
		if( version_compare( $app_version, '4.0' ) < 0 )
		{	// b2evo 3
			//array_walk($type_list, function(&$v){ $v = "'$v'"; });
			foreach( $type_list as $v )
			{
				$type_list_fixed[] = "'$v'";
			}

			$CommentList = new CommentList( NULL, implode(',', $type_list_fixed), array('published'), $Item->ID, '', 'ASC' );
		}
		else
		{	// b2evo 4
			$type = substr( $type, 0, 1 );
			$CommentList = new CommentList2( $Blog, $Blog->get_setting('comments_per_page'), 'CommentCache', $type.'_' );
			
			// Filter list:
			$CommentList->set_default_filters( array(
					'types' => $type_list,
					'statuses' => array ( 'published' ),
					'post_ID' => $Item->ID,
					'order' => $Blog->get_setting( 'comments_orderdir' ),
				) );
			
			$CommentList->load_from_Request();
		
			// Get ready for display (runs the query):
			$CommentList->display_init();
		}
		
		if( $CommentList->result_num_rows < 1 ) return;
		
		forget_param('c');
		forget_param('tb');
		forget_param('pb');
		forget_param('disp');
		forget_param('more');
		forget_param('title');
		
		if( method_exists( $CommentList, 'page_links' ) && $Blog->get_setting('paged_comments') )
		{	// Navigation
			$CommentList->page_links( array(
					'page_url' => url_add_tail( $Item->get_permanent_url(), '#post-tabs' ),
					'block_start' => '<div class="comment-navigation clearfix">',
					'block_end' => '</div>',
					'prev_text' => '&laquo;',
					'next_text' => '&raquo;',
				) );
			
			$nav_displayed = 1;
		}
		
		echo $params['comment_list_start'];
		while( $Comment = & $CommentList->get_next() )
		{	// Loop through comments:
			// ------------------ COMMENT INCLUDED HERE ------------------
			skin_include( $params['comment_template'], array(
					'Comment'              => & $Comment,
					'comment_start'        => $params['comment_start'],
					'comment_end'          => $params['comment_end'],
					'link_to'		       => $params['link_to'],		// 'userpage' or 'userurl' or 'userurl>userpage' or 'userpage>userurl'
				) );
			// ---------------------- END OF COMMENT ---------------------
	
		}	// End of comment list loop.
		echo $params['comment_list_end'];
		
		if( !empty($nav_displayed) )
		{	// Navigation
			$CommentList->page_links( array(
					'page_url' => url_add_tail( $Item->get_permanent_url(), '#post-tabs' ),
					'block_start' => '<div class="comment-navigation clearfix">',
					'block_end' => '</div>',
					'prev_text' => '&laquo;',
					'next_text' => '&raquo;',
				) );
		}
	}

	
	function get_author_msgform_link( $Comment )
	{
		global $Blog;
		
		$form_url = $Blog->get('msgformurl');
		
		if( $Comment->get_author_User() )
		{ // This comment is from a registered user:
			if( empty($Comment->author_User->email) )
			{ // We have no email for this Author :(
				return false;
			}
			elseif( empty($Comment->author_User->allow_msgform) )
			{ // User does not allow message form
				return false;
			}
			$form_url = url_add_param( $form_url, 'recipient_id='.$Comment->author_User->ID );
		}
		else
		{ // This comment is from a visitor:
			if( empty($Comment->author_email) )
			{ // We have no email for this comment :(
				return false;
			}
			elseif( empty($Comment->allow_msgform) )
			{ // Anonymous commentator does not allow message form (for this comment)
				return false;
			}
		}

		$form_url = url_add_param( $form_url, 'comment_id='.$Comment->ID.'&amp;post_id='.$Comment->item_ID
				.'&amp;redirect_to='.rawurlencode(url_rel_to_same_host(regenerate_url('','','','&'), $form_url)) );
		
		return $form_url;
	}
	
	
	function check_updates()
	{
		global $Settings, $servertimenow, $app_version;

		$check_every = 86400 * 7; // check every 7 days

		$last_checked = $Settings->get('sonorth_last_checked');
		if( $last_checked > $servertimenow - $check_every ) return false;

		$Settings->set( 'sonorth_last_checked', $servertimenow );
		$Settings->dbupdate();
		
		// Construct XML-RPC client:
		load_funcs('xmlrpc/model/_xmlrpc.funcs.php');
		$client = new xmlrpc_client('/xmlrpc.php', 'rpc.sonorth.com', 80);

		$info = new xmlrpcval( array(
					'product'		=> new xmlrpcval( str_replace('_Skin', '', get_class($this)) ),
					'version'		=> new xmlrpcval( $this->version ),
					'app_type'		=> new xmlrpcval( 'b2evolution' ),
					'add_version'	=> new xmlrpcval( $app_version ),
				), 'struct' );
		
		$message = new xmlrpcmsg('check_update.skin', array($info) );

		if( ($result = $client->send($message)) && !$result->faultCode() )
		{
			$value = xmlrpc_decode_recurse($result->value());
			if( is_array($value) && count($value) > 1 )
			{
				if( !empty($value['version']) && version_compare( $value['version'], $this->version ) )
				{	// There's a newer version available
					return $value;
				}
			}
		}
		return false;
	}
}

?>