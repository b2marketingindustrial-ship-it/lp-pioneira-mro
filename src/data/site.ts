export const site = {
  brand: 'Pioneira Rolamentos',
  brandShort: 'Pioneira',
  url: 'https://lp.pioneirarolamentos.com.br/componentes-mro',
  address: 'Rua Barão de Parnaíba, 191 - Centro, Campinas - SP, 13013-170',
  title: 'Componentes MRO para manutenção industrial | Pioneira Rolamentos',
  description:
    'Mancais, acoplamentos, retentores, vedações, buchas e acessórios para manutenção industrial, com apoio técnico na identificação do componente.',
}

/** Marcas representadas — logos no carrossel e lista no card escuro das linhas de produto. */
export const brands = [
  'BGL',
  'BRG Mancais e Vedações',
  'Rexon',
  'Vulkan do Brasil',
  'Tecnon',
  'Vedabrás',
  'ITW Rocol',
] as const

/** Shortcodes do plugin de atendimento do WordPress. Vazio mostra o placeholder tracejado. */
export const shortcodes = {
  /** Slot do Hero, coluna de 300px. */
  chat: '[atendimento_chat id="default"]',
  /** Slot da seção de cotação. */
  form: '[atendimento_form id="default-form"]',
}
