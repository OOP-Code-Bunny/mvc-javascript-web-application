<?php
  $Profile = array(
  array(
	'url' => './images/profile.gif',
	'title' => 'profile1',
	'content' => 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
	),
   array(
	'url' => './images/profile.gif',
	'title' => 'profile2',
	'content' => 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
	),
   array(
	'url' => './images/profile.gif',
	'title' => 'profile3',
	'content' => 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
	)	
  );
  $home = array(
  array(
	'url' => './images/home.gif',
	'title' => 'home1',
	'content' => 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
	),
   array(
	'url' => './images/home.gif',
	'title' => 'home2',
	'content' => 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
	),
   array(
	'url' => './images/home.gif',
	'title' => 'home3',
	'content' => 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
	)	
  );
  $Messages = array(
  array(
	'url' => './images/messages.gif',
	'title' => 'messages1',
	'content' => 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
	),
   array(
	'url' => './images/messages.gif',
	'title' => 'messages2',
	'content' => 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
	),
   array(
	'url' => './images/messages.gif',
	'title' => 'messages3',
	'content' => 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
	)	
  );
  $Help = array(
  array(
	'url' => './images/help.gif',
	'title' => 'help1',
	'content' => 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
	),
   array(
	'url' => './images/help.gif',
	'title' => 'help2',
	'content' => 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
	),
   array(
	'url' => './images/help.gif',
	'title' => 'help3',
	'content' => 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
	)	
  );
  
  $Setting = array(
  array(
	'url' => './images/settings.gif',
	'title' => 'setting1',
	'content' => 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
	),
   array(
	'url' => './images/settings.gif',
	'title' => 'setting2',
	'content' => 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
	),
   array(
	'url' => './images/settings.gif',
	'title' => 'setting3',
	'content' => 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
	)	
  );  
  $data = $_POST['title']; 
  if($data){
	  $arg = $$data;
	  sleep(2);
	  echo json_encode($arg);	  
	  }

?>