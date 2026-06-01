export const emailTemplates = ({
  sourceCompany,
  targetCompany,
}: {
  sourceCompany: {
    name: string;
    employee: string;
    email: string;
    deadline: string;
  };
  targetCompany: {
    name: string;
    email: string;
    phone: string;
    dueDate: string;
  };
}) => ({
  introduction: `
    Boa tarde! Tudo bem?
    Me chamo ${sourceCompany.employee}, da ${sourceCompany.name}.
    Em consulta pública, verificamos que a licença ambiental da ${targetCompany.name} vencerá em ${targetCompany.dueDate}. O prazo para
    renovar esta licença é de ${sourceCompany.deadline} antes do vencimento.
    Vocês já entraram com o processo de renovação?
    Caso não, podemos marcar uma reunião para conversarmos melhor sobre o assunto?
    Atenciosamente,
  `,

  followUpCall: `
    Bom dia, tudo bem? Aqui é a ${sourceCompany.employee}. Com quem eu falo?
    Eu só queria confirmar se o e-mail que enviei chegou aí.É sobre o vencimento da licença ambiental. O e-mail
    que eu tenho é o ${targetCompany.email}. Esse é o e-mail da responsável?
  `,

  followUpEmail: `
    Boa tarde!
    Achei interessante te enviar a licença ambiental em anexo para acompanhamento do prazo de validade. Dê uma
    olhada na ressalva onde diz que a licença deverá ser renovada ${sourceCompany.deadline} antes do prazo de validade.
    Conseguir essa licença ambiental e poder operar é importante pra vocês?
    Podemos marcar uma visita para explicar melhor sobre renovação?
    Assim poderão operar de forma adequada.
    Atenciosamente,
  `,

  followUpSubject: `
    Bom dia!
    Essa semana enviei e-mails sobre a licença ambiental da empresa.
    Todas as indústrias de Belo Horizonte precisam ter o certificado atualizado. Esse documento tem
    data de validade. É importante estar em dia.
    Caso precisem entender melhor sobre essas informações, podemos agendar uma reunião sem
    compromisso, apenas para darmos as melhores soluções. Pode ser?
    Atenciosamente,
  `,

  breakUp: `
    Tentei contato com vocês essa semana, porém não tive retorno.
    Meu intuito foi alertar vocês sobre a licença ambiental que vencerá em breve.
    Entendo que nossa rotina é corrida, então vou me desligar.
    Caso desejem retomar o assunto, é só responder este e-mail.
  `,
});

export function getEmailTemplates() {}
