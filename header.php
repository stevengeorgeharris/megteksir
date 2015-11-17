<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title><?php wp_title('&raquo;','true','right'); ?><?php bloginfo('name'); ?></title>
  <meta name="description" content="<?php bloginfo('description'); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/ico" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.ico" />
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?> >
<!-- Google Analytics -->
