$(document).ready(function() {
    $('.btn-visualizar').on('click', function() {
        const produtoId = $(this).data('id');

        // Fazendo a requisição AJAX
        $.ajax({
            url: `http://localhost:3000/produtos/${produtoId}`,
            method: 'GET',
            success: function(produto) {
                // Preenchendo a modal com os dados do produto
                $('#produtoId').text(produto.id);
                $('#produtoNome').text(produto.nome);
                $('#produtoPreco').text(`R$ ${produto.preco.toFixed(2).replace('.', ',')}`);
                
                // Exibe a modal
                $('#produtoModal').modal('show');
            },
            error: function() {
                alert('Erro ao buscar o produto.');
            }
        });
    });

    let produtoParaRemover = 0; // Variável para armazenar o ID do produto a ser deletado

    // Captura o clique no botão "Apagar" e exibe a modal
    $('.btn-remover').on('click', function() {
        const produtoIdToDelete = $(this).data('id'); // Captura o ID diretamente do botão
        produtoParaRemover = produtoIdToDelete;
        console.log('Produto ID para deletar:', produtoIdToDelete); // Verifica o valor capturado
        $('#confirmDeleteModal').modal('show'); // Exibe a modal de confirmação
    });

    // Confirmação de exclusão
    $('#confirmDeleteButton').on('click', function() {
        // Verifica se o ID está correto antes de executar a exclusão
        if (produtoParaRemover) {
            // Aqui você pode fazer uma requisição AJAX para deletar o item
            $.ajax({
                url: `http://localhost:3000/produtos/${produtoParaRemover}`,
                method: 'DELETE',
                success: function(response) {
                    // Fecha a modal e atualiza a página ou remove a linha do produto da tabela
                    $('#confirmDeleteModal').modal('hide');
                    window.location.reload();
                },
                error: function() {
                    alert('Erro ao excluir o produto.');
                }
            });
        }
    });

     // Captura o clique no botão "Editar" e exibe a modal com os dados do produto
     $('.btn-editar').on('click', function() {
        const produtoId = $(this).data('id');

        // Busca o produto no servidor (ou preencha com os dados já carregados na tabela)
        $.ajax({
            url: `http://localhost:3000/produtos/${produtoId}`,
            method: 'GET',
            success: function(produto) {
                // Preenche os campos do formulário na modal
                $('#editProductId').val(produto.id);
                $('#editProductName').val(produto.nome);
                $('#editProductPrice').val(produto.preco);

                // Exibe a modal de edição
                $('#editProductModal').modal('show');
            },
            error: function() {
                alert('Erro ao carregar dados do produto.');
            }
        });
    });

    // Salva as alterações ao clicar em "Salvar Alterações"
    $('#saveEditButton').on('click', function() {
        // Captura os dados do formulário
        const produtoId = parseInt($('#editProductId').val());
        const nome = $('#editProductName').val();
        const preco = parseFloat($('#editProductPrice').val());
        console.log(nome, produtoId, preco);

        // Envia a atualização para o servidor
        $.ajax({
            url: `http://localhost:3000/produtos/${produtoId}`,
            method: 'PUT',
            data: { nome, preco },
            success: function(response) {
                // Fecha a modal e exibe uma mensagem de sucesso
                $('#editProductModal').modal('hide');
                window.location.reload();
            },
            error: function() {
                alert('Erro ao atualizar o produto.');
            }
        });
    });
});
