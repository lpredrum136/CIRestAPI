<?php

class Post_model extends CI_Model
{
  public function __construct()
  {
    $this->load->database();
  }

  public function read()
  {
    $this->db->order_by('posts.id', 'DESC');
    $this->db->select('posts.id, category_id, title, body, author, posts.created_at, name');
    $this->db->join('categories', 'categories.id = posts.category_id');
    $query = $this->db->get('posts');
    return $query->result_array();
  }
}
