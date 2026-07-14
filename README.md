# Maratona Agentes de IA do jeito certo!

Landing page da Maratona Agentes de IA — conteúdo técnico para desenvolvedores e tech leaders sobre fundamentos, cronologia e evolução da IA, computer use e harness de agentes.

Este projeto nasceu como uma cópia estrutural da [Maratona IA do jeito certo!](https://maratona.ia.br), adaptada para um público mais técnico.

## Como rodar localmente

Requisitos: Node.js & npm ([instale com nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).

```sh
npm i
npm run dev
```

## Tecnologias

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Formato

Turma ao vivo e online, 4 aulas semanais (1 por semana), cada uma seguida de um desafio prático. Início previsto:
última semana de agosto de 2026. Currículo baseado no programa [IFTL AI 4 Tech](https://iftl.ai/ai-4-tech), condensado
de 6 para 4 semanas e adaptado para cobrir fundamentos, cronologia/evolução da IA, computer use e harness de agentes.

## Pendências antes de publicar

- [ ] Definir preço final e parcelamento (`src/components/Pricing.tsx`, `src/components/CommunityDiscount.tsx`, `src/components/Hero.tsx`)
- [ ] Trocar o link de checkout placeholder pelo link real da Hotmart (ou outra plataforma)
- [ ] Confirmar dia da semana e horário exato das aulas ao vivo (hoje só há a data de início: última semana de agosto de 2026)
- [ ] Adicionar foto real do instrutor Marcus Devolder (hoje usa um avatar com iniciais em `src/assets/instructor-3-marcus.svg`)
- [ ] Revisar bio do Marcus Devolder em `src/components/Instructors.tsx`
- [ ] Trocar o vídeo embutido no Hero pelo vídeo de divulgação real
- [ ] Atualizar imagem de Open Graph (`index.html`, hoje aponta para `/placeholder.svg`)
- [ ] Confirmar se o link do grupo de WhatsApp da comunidade em `CommunityDiscount.tsx` deve ser o mesmo da maratona original
