import $ from 'jquery';

$(function () {
  $('#button-ptBR').on('click', function () {
    $('h1').html('Olá Mundo!');
  });

  $('#button-enUS').on('click', function () {
    $('h1').html('Hello World!');
  });
});
