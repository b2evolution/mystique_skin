<?php
/**
 * This skin only uses one single template which includes most of its features.
 * It will also rely on default includes for specific dispays (like the comment form).
 *
 * The main page template is used to display the blog when no specific page template is available
 * to handle the request (based on $disp).
 *
 * b2evolution Mystique skin v2.0.1
 *
 */
if( !defined('EVO_MAIN_INIT') ) die( 'Please, do not access this page directly.' );

if( version_compare( $app_version, '3.0' ) < 0 )
{
	die( 'This skin is designed for b2evolution 3.0 and above. Please <a href="http://b2evolution.net/downloads/index.html">upgrade your b2evolution</a>.' );
}

// Do inits depending on current $disp:
skin_init( $disp );

// HTML HEADER INCLUDED HERE
skin_include( '_html_header.inc.php' );

global $s, $ReqURI;

?>
<div id="page" class="<?php $Skin->body_class() ?>">
  <!-- header -->
  <div class="page-content header-wrapper">
    <div id="header" class="bubbleTrigger">
	
	<ul class="blog-list">
      <?php
		skin_container( NT_('Page Top'), array(
				'block_start' => '',
				'block_end' => '',
				'block_display_title' => false,
				'list_start' => '',
				'list_end' => '',
				'item_start' => '<li>',
				'item_end' => '</li>',
			) );
		?>
	</ul>
    <div id="site-title" class="clearfix">
	  <?php
		if( $blog_name = $Skin->get_setting('blog_name') )
		{
			if( preg_match( '~^https?://~', $blog_name, $match ) )
			{
				$blog_name = '<img src="'.$blog_name.'" alt="'.$Blog->get('name').'" />';
			}
			echo '<h1 id="logo"><a href="'.$Blog->get( 'url' ).'">'.$blog_name.'</a></h1>';
		}
		
		if( $Skin->get_setting('blog_tagline') )
		{
			echo '<p class="headline">'.$Skin->get_setting('blog_tagline').'</p>';
		}
	  ?>
    </div>
      <div class="shadow-left">
        <div class="shadow-right clearfix">
          <p class="nav-extra">
			<?php
			echo '<a href="'.$Blog->get( 'rss2_url' ).'" class="nav-extra" title="'.$Skin->T_('View RSS Feed').'"></a>';
			
			if( $soc_user = $Skin->get_setting('twitter_user') )
			{
			  echo '<a href="http://twitter.com/'.$soc_user.'" target="_blank" class="nav-extra" style="background-position:-64px top" title="'.$Skin->T_('Follow me on Twitter').'"></a>';
			}
			if( $soc_user = $Skin->get_setting('flickr_user') )
			{
			  echo '<a href="http://www.flickr.com/people/'.$soc_user.'/" target="_blank" class="nav-extra" style="background-position:-128px top" title="'.$Skin->T_('Find me on Flickr').'"></a>';
			}
			if( $soc_user = $Skin->get_setting('facebook_user') )
			{
			  echo '<a href="http://www.facebook.com/'.$soc_user.'" target="_blank" class="nav-extra" style="background-position:-192px top" title="'.$Skin->T_('Find me on Facebook').'"></a>';
			}
			if( $soc_user = $Skin->get_setting('myspace_user') )
			{
			  echo '<a href="http://www.myspace.com/'.$soc_user.'" target="_blank" class="nav-extra" style="background-position:-256px top" title="'.$Skin->T_('Find me on MySpace').'"></a>';
			}
			if( $soc_user = $Skin->get_setting('linkedin_user') )
			{
			  echo '<a href="http://www.linkedin.com/in/'.$soc_user.'" target="_blank" class="nav-extra" style="background-position:-320px top" title="'.$Skin->T_('Follow me on LinkedIn').'"></a>';
			}
			if( $soc_user = $Skin->get_setting('youtube_user') )
			{
			  echo '<a href="http://www.youtube.com/user/'.$soc_user.'" target="_blank" class="nav-extra" style="background-position:-384px top" title="'.$Skin->T_('Follow me on Youtube').'"></a>';
			}
			?>
		  </p>
          <!-- main navi -->
          <ul id="navigation" class="clearfix">
            <?php
			
			// Home page link
			echo '<li class="home active"><a class="home fadeThis active" href="'.$Blog->get( 'url' ).
					'"><span class="title">'.$Skin->T_('Home').'</span></a></li>';
			
			// "Menu" CONTAINER EMBEDDED HERE
			ob_start();
			skin_container( NT_('Menu'), array(
					'block_start'         => '',
					'block_end'           => '',
					'block_display_title' => false,
					'list_start'          => '',
					'list_end'            => '',
					'item_start'          => '<li>',
					'item_selected_start' => '<li class="active">',
				) );
			$menu_container = ob_get_clean();
			
			echo preg_replace( '~<li([^>]+)?><a href="'.quotemeta($Blog->get('url')).'">'.T_('Home').'</a></li>~is', '', $menu_container );
			
			?>
          </ul>
          <!-- /main navi -->
        </div>
      </div>
    </div>
  </div>
  <!-- /header -->
  <!-- left+right bottom shadow -->
  <div class="shadow-left page-content main-wrapper">
    <div class="shadow-right">
      <!-- main content: primary + sidebar(s) -->
      <div id="main">
        <div id="main-inside" class="clearfix">
          <!-- primary content -->
          <div id="primary-content">
            <div class="blocks">
              <?php
				// MESSAGES GENERATED FROM ACTIONS
				messages( array(
						'block_start' => '<div class="action_messages">',
						'block_end'   => '</div>',
					) );
				
				// Display search results
				global $ASearch_plugin;
				if( is_object($ASearch_plugin) )
				{
					$ASearch_plugin->display_results();
				}

				// PREV/NEXT POST LINKS (SINGLE POST MODE)
				item_prevnext_links( array(
						'block_start' => '<div class="single-navigation clear-block">',
						'block_end'   => '</div>',
						'prev_start'  => '<div class="alignleft">',
						'prev_end'    => '</div>',
						'next_start'  => '<div class="alignright">',
						'next_end'    => '</div>',
					) );
				
				// TITLE FOR THE CURRENT REQUEST
				request_title( array(
						'title_before'=> '<h2 class="request_title">',
						'title_after' => '</h2>',
						'title_none'  => '',
						'glue'        => ' - ',
						'title_single_disp' => false,
						'title_page_disp' => false,
						'format'      => 'htmlbody',
					) );
			
				if( $Item = & get_featured_Item() )
				{	// We have a featured/intro post to display:
					// ITEM BLOCK INCLUDED HERE
					skin_include( '_item_block.inc.php', array(
							'feature_block'	=> true,
							'content_mode'	=> 'auto',
							'intro_mode'	=> 'normal',
							'item_class'	=> 'post clearfix bFeatured',
							'image_size'	=> 'fit-520x390',
						) );
				}
				
				// START OF POSTS
				// Display message if no post:
				display_if_empty( array(
						'before'	=> '<div class="bPost display_empty">',
						'after'		=> '</div>',
					) );
		
				while( $Item = & mainlist_get_item() )
				{
					// ITEM BLOCK INCLUDED HERE
					skin_include( '_item_block.inc.php', array(
							'content_mode'	=> 'auto',
							'image_size'	=> 'fit-520x390',
							'item_class'	=> 'post clearfix',
						) );
				}
				
				// PREV/NEXT PAGE LINKS (POST LIST MODE)
				mainlist_page_links( array(
						'block_start' => '<div class="comment-navigation clearfix">',
						'block_end' => '</div>',
						'prev_text' => '&laquo;',
						'next_text' => '&raquo;',
					) );
				
				// MAIN CONTENT TEMPLATE INCLUDED HERE (Based on $disp)
				skin_include( '$disp$', array(
						'disp_posts'  => '',		// We already handled this case above
						'disp_single' => '',		// We already handled this case above
						'disp_page'   => '',		// We already handled this case above
					) );
				?>
            </div>
          </div>
          <!-- /primary content -->
          <?php if( @preg_match('~-3~', $Skin->get_setting('skin_layout')) ) : ?>
          <!-- sidebar2 -->
          <div id="sidebar2">
            <ul class="blocks">
              <?php
				// "Sidebar" CONTAINER EMBEDDED HERE
                skin_container( NT_('Sidebar 2'), array(
                        // This will enclose each widget in a block:
                        'block_start' => '<li class="block $wi_class$"><div class="clearfix">',
                        'block_end' => '</div></li>',
                        // This will enclose the title of each widget:
                        'block_title_start' => '<h3 class="title"><span>',
                        'block_title_end' => '</span></h3><div class="block-div"></div><div class="block-div-arrow"></div>',
                        // If a widget displays a list, this will enclose that list:
                        'list_start' => '<ul>',
                        'list_end' => '</ul>',
                        // This will enclose each item in a list:
                        'item_start' => '<li>',
                        'item_end' => '</li>',
                        // This will enclose sub-lists in a list:
                        'group_start' => '<ul>',
                        'group_end' => '</ul>',
                        // This will enclose (foot)notes:
                        'notes_start' => '<div class="notes">',
                        'notes_end' => '</div>',
                    ) );
			  ?>
            </ul>
          </div>
          <!-- sidebar2 -->
          <?php endif; ?>
          
          <?php if( ! @preg_match('~-1~', $Skin->get_setting('skin_layout')) ) : ?>
          <!-- sidebar -->
          <div id="sidebar">
            <ul class="blocks">
              <!-- search form -->
              <li class="block">
                <div class="search-form">
                  <form method="get" id="searchform" action="<?php echo $Blog->gen_blogurl() ?>" class="clearfix" name="searchform">
                    <fieldset>
                      <div id="searchfield">
                        <?php
						$s_value = $s;
						if( empty($s_value) ) $s_value = $Skin->T_('Search');
						
						echo '<input type="text" name="s" class="text clearField" value="'.
								$s_value.'" onfocus="if (this.value == \''.$s_value.
								'\') {this.value = \'\';}" onblur="if (this.value == \'\')
								{this.value = \''.$s_value.'\';}" />';
						
						?>
                      </div>
                      <input type="hidden" name="disp" value="search">
                      <input type="submit" value="" class="submit" />
                    </fieldset>
                  </form>
                </div>
              </li>
              <!-- /search form -->
              <?php
				// Display javascript tabbed widget
				$Skin->display_tabbed_widget();
				
                // "Sidebar" CONTAINER EMBEDDED HERE
                skin_container( NT_('Sidebar'), array(
                        // This will enclose each widget in a block:
                        'block_start' => '<li class="block $wi_class$"><div class="clearfix">',
                        'block_end' => '</div></li>',
                        // This will enclose the title of each widget:
                        'block_title_start' => '<h3 class="title"><span>',
                        'block_title_end' => '</span></h3><div class="block-div"></div><div class="block-div-arrow"></div>',
                        // If a widget displays a list, this will enclose that list:
                        'list_start' => '<ul>',
                        'list_end' => '</ul>',
                        // This will enclose each item in a list:
                        'item_start' => '<li>',
                        'item_end' => '</li>',
                        // This will enclose sub-lists in a list:
                        'group_start' => '<ul>',
                        'group_end' => '</ul>',
                        // This will enclose (foot)notes:
                        'notes_start' => '<div class="notes">',
                        'notes_end' => '</div>',
                    ) );
				
				// Display twitter widget
				$Skin->display_twitter_widget();
				
                ?>
            </ul>
          </div>
          <!-- sidebar -->
          <?php endif; ?>
        </div>
      </div>
      <!-- /main content -->
      <?php
		// "After posts" CONTAINER EMBEDDED HERE
		skin_container( NT_('After posts'), array(
				'block_start'	=>	'<div class="AfterPosts">',
				'block_end'		=>	'</div>',
			) );
	  ?>
      <!-- footer -->
      <div id="footer">
        <div id="footer-blocks" class="page-content">
        <div class="slide-container clear-block">
            <ul class="slides">
              <li class="slide slide-1 page-content">
                <div class="slide-content"><?php $Skin->display_footer_container() ?></div>
              </li>
            </ul>
        </div>
        </div>
        <div class="page-content"><?php $Skin->display_footer() ?></div>
      </div>
      <!-- /footer -->
    </div>
  </div>
  <div id="pageControls"></div>
</div>
<?php
// HTML FOOTER INCLUDED HERE
skin_include( '_html_footer.inc.php' );
?>