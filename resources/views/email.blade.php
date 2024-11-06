<x-mail::message>
# Olá {{ $dados['nome'] }}

Este é o seu conteúdo de e-mail.

- Mensagem: {{ $dados['texto'] }}

Obrigado,<br>
{{ config('app.name') }}
</x-mail::message>