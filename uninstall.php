<?php

if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) )
	exit();

function correodirect_delete_plugin() {
	global $wpdb;

	delete_option( 'correodirect_idaf' );
    delete_option( 'correodirect_feedburner_id' );
    delete_option( 'correodirect_form_title' );
    delete_option( 'correodirect_form_desc' );
    delete_option( 'correodirect_response' );


}

correodirect_delete_plugin();

?>