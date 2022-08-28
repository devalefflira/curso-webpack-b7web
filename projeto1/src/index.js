import $ from 'jquery';
import './css/style.css';

$(function () {
  $('#button-ptBR').on('click', function () {
    $('h1').html('Olá Mundo!');
    $(this).addClass('button');
  });

  $('#button-enUS').on('click', function () {
    $('h1').html('Hello World!');
    $(this).addClass('button');
  });
});
