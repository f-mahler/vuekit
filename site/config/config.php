<?php

use Kirby\Cms\Form;

return [
  'panel' => array('css' => '/site/assets/css/panel.css'),
  'debug' => false,
  'api' => [
    'basicAuth' => true,
    'routes' => [
      [
        'pattern' => 'data',
        'action'  => function() {

          $site = $this->site();

          $sitedata = array(
            'title' => $site->title()->value(),
            'url' => $site->url()
          );

          function files($page) {
            $files = [];
            foreach ($page->files()->sortBy('sort', 'asc') as $file) {
              $filedata = array(
                'url' => $file->url(),
                'page' => $file->parent()->uid(),
                'index' => $file->indexOf(),
                'filename' => $file->name(),
                'extension' => $file->extension(),
        				'size' => $file->size(),
        				'niceSize' => $file->niceSize(),
        				'mime' => $file->mime(),
        				'type' => $file->type(),
                'ratio' => $file->ratio()
              );
              array_push($files, $filedata);
            }
            return $files;
          }

          function children($pageId) {
            $children = [];
            foreach ($pageId->children() as $child) {
              $childinfo = array(
                'title' => $child->title()->value(),
                'uid' => $child->uid(),
                'status' => $child->status(),
                'template' => $child->intendedTemplate()->name(),
                'content' => Form::for($child)->values(),
                'files' => files($child),
                'children' => children($child)
              );
              array_push($children, $childinfo);
            }
            return $children;
          }

          $pages = [];
          foreach ($site->children() as $id) {
            $page = $this->page($id);
            $pagedata = array(
              'title' => $page->title()->value(),
              'uid' => $page->uid(),
              'status' => $page->status(),
              'template' => $page->intendedTemplate()->name(),
              'content' => Form::for($page)->values(),
              'files' => files($page),
              'children' => children($page)
            );
            array_push($pages, $pagedata);
          }

          $data = array(
            'site' => $sitedata,
            'pages' => $pages
          );

          return json_encode($data, true);
        }
      ]
    ]
  ]
];
