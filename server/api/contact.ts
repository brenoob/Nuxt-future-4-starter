export default defineEventHandler(async (event) => {
    const body = await readBody(event)  // Lê o corpo da requisição
  
    // Lógica para processar o formulário (exemplo fictício)
    if (!body.name || !body.email || !body.message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Todos os campos são obrigatórios.'
      })
    }
  
    // Simula o sucesso no envio
    return { success: true, message: 'Formulário enviado com sucesso!' }
  })
  