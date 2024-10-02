<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class MainController extends AbstractController
{
    #[Route('/', name: 'main')]
    public function index(HttpClientInterface $client): Response
    {
          
         $posts = $client->request('GET', 'https://fakestoreapi.com/products')->toArray();
         
         
        return $this->render('main/index.html.twig', [
            'posts' => $posts,
        ]);
    }
}
