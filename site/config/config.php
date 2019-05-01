<?php

use Kirby\Cms\Form;

return [
  'debug' => true,
  'api' => [
    'basicAuth' => true,
    'routes' => [
      [
        'pattern' => 'data',
        'action'  => function() {
          $site = $this->site();
          function md($pageId) {
            $collection = [];
            $content = $pageId->content();
            foreach($content->fields() as $field) {
              if(strpos($field->key(), '_md') !== false) {
                $collection[$field->key()] = $field->kirbytext()->value();
              }
            }
            return $collection;
          }
          function files($page) {
            $files = [];
            foreach ($page->files()->sortBy('sort', 'asc') as $file) {
              $filedata = array(
                'url' => $file->url(),
                'thumb' => $file->thumb(['width' => 10, 'quality' => 80, 'blur' => 5])->url(),
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
                'markdown' => md($child),
                'files' => files($child),
                'children' => children($child)
              );
              array_push($children, $childinfo);
            }
            return $children;
          }
          $sitedata = array(
            'title' => $site->title()->value(),
            'url' => $site->url(),
            'content' => Form::for($site)->values(),
            'markdown' => md($site),
          );
          $pages = [];
          foreach ($site->children() as $id) {
            $page = $this->page($id);
            $pagedata = array(
              'title' => $page->title()->value(),
              'uid' => $page->uid(),
              'status' => $page->status(),
              'template' => $page->intendedTemplate()->name(),
              'content' => Form::for($page)->values(),
              'markdown' => md($page),
              'files' => files($page),
              'children' => children($page)
            );
            array_push($pages, $pagedata);
          }
          $data = array(
            'site' => $sitedata,
            'pages' => $pages,
          );
          return json_encode($data, true);
        }
      ]
    ]
  ]
];
