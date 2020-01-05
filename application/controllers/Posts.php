<?php

class Posts extends CI_Controller
{
  public function index()
  {
    // Header
    /* header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json'); */

    $data['title'] = 'Latest Posts';

    $data['posts'] = $this->post_model->read();

    // Get row count, if there is data
    if ($data['posts']) {
      $result['data'] = $data['posts'];
      // Turn to JSON and output
      echo json_encode($result);
    } else echo json_encode(['message' => 'No Posts Found']);


    /* $this->load->view('templates/header');
    $this->load->view('posts/index', $data);
    $this->load->view('templates/footer'); */
  }
}
