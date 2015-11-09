<?php

// ------------------------------------------------------------
// ---------- Proper way to enqueue scripts and styles ----------
// ------------------------------------------------------------
function matter_scripts() {

    wp_deregister_script( 'jquery' );
    wp_register_script( 'jquery', ( 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js' ), false, null, true );
    wp_enqueue_script( 'jquery' );
    wp_enqueue_script( 'main_js', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0.0', false );
    wp_enqueue_style( 'style_css', get_stylesheet_uri());
}

add_action( 'wp_enqueue_scripts', 'matter_scripts' );


?>
