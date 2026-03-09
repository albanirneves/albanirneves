

## Plano: Seção de Avaliações do Workana

### Objetivo
Criar uma seção "Depoimentos" para exibir as 28 avaliações fornecidas do Workana, seguindo o design visual do portfólio (tema terminal/neon).

### Estrutura de Implementação

**1. Criar componente `src/components/Testimonials.tsx`**

Dados estruturados:
- Nome do cliente
- Comentário (quando disponível)
- Tecnologias/skills do projeto
- Tempo relativo ("há 4 anos", "há 5 anos", etc.)
- Título do projeto

Design:
- Grid responsivo (1 coluna mobile, 2 colunas tablet, 3 colunas desktop)
- Cards com classe `terminal-window`
- Ícone de aspas para depoimentos com comentários
- Badges de tecnologias (mesmo estilo usado em Projects.tsx)
- Destacar depoimentos com comentários dos que só têm skills
- Hover effect com border transition (cyan ou green)
- Scroll suave e animações consistentes

Layout do card:
```text
┌─────────────────────────────┐
│ "Comentário do cliente..."  │
│                              │
│ Cliente: Nome do Cliente     │
│ Projeto: Título do Projeto   │
│                              │
│ [tech] [tech] [tech]         │
│                              │
│ há X anos                    │
└─────────────────────────────┘
```

**2. Adicionar ao `src/pages/Index.tsx`**
- Importar componente Testimonials
- Inserir entre `<Services />` e `<Partners />`
- Ordem: Hero → About → Skills → Projects → Services → **Testimonials** → Partners → Footer

**3. Atualizar `src/components/Navigation.tsx`**
- Adicionar link "Depoimentos" no array navLinks
- href: "#depoimentos"
- Inserir após "Serviços"

**4. Organização dos depoimentos**
- Priorizar os que têm comentários escritos (aparecem primeiro)
- Manter ordem cronológica dentro de cada grupo
- Total: 28 avaliações
- Filtrar duplicatas se houver

**5. Estilo visual**
- Título: `<span className="text-secondary">&lt;</span> Depoimentos <span className="text-secondary">/&gt;</span>`
- Efeito glow-green no título
- Cor secondary (verde neon) para destaque
- Background alternado (seção sem bg-muted/30 para contrastar com Services e Partners)

### Detalhes Técnicos

**Componente Testimonials:**
- Interface TypeScript para tipagem dos depoimentos
- Array com 28 objetos de avaliações
- Renderização condicional: mostrar aspas só quando há comentário
- Formatação de tempo relativa mantida do dado original
- Cards com altura flexível para acomodar textos diferentes

**Responsividade:**
- Mobile (< 768px): 1 coluna
- Tablet (768px - 1024px): 2 colunas  
- Desktop (> 1024px): 3 colunas
- Gap consistente: gap-6

**Interatividade:**
- Hover: border muda de border-border para border-secondary
- Transition suave em todos os elementos
- Group hover effects para destacar o card completo

### Resultado Esperado
Uma seção profissional e visualmente coerente que exibe todas as 28 avaliações do Workana, destacando a experiência e reputação do profissional. O design mantém a identidade visual terminal/cyberpunk do restante do site.

