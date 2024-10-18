import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  
  const { username, password } = body;

  // Logando as credenciais recebidas para verificar
  console.log('Received:', { username, password });

  // Mock de um usuário para exemplo
  const mockUser = {
    username: 'user',
    password: '123' // Senha mockada para exemplo
  };

  if (username === mockUser.username && password === mockUser.password) {
    // Login bem-sucedido
    return {
      success: true,
      message: 'Login realizado com sucesso!',
      user: { username: mockUser.username } // Retornar informações do usuário, se necessário
    };
  } else {
    // Login falhou
    return {
      success: false,
      message: 'Nome de usuário ou senha inválidos.'
    };
  }
});
