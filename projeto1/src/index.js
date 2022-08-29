import $ from 'jquery';
import './css/style.css';
import AuroraWallpaper from './images/aurora-1197753_1920.jpg';
import Button from './components/button/button.js';

$(function () {
  $('#button-ptBR').on('click', function () {
    $('h1').html('Olá Mundo!');
    $(this).addClass('button');
    $('#image').attr('src', AuroraWallpaper);
  });

  $('#button-enUS').on('click', function () {
    $('h1').html('Hello World!');
    $(this).addClass('button');
  });

  let button = new Button();
  button.setTitle('Teste');
  button.setClick(function () {
    alert('Clicked!');
  });
  $('.area').html(button.render());
});
