# Testing

100% test coverage is the key to great vibe coding. Tests let you move fast, trust your instincts, and ship with confidence — without them, vibe coding is just yolo coding. With tests, it's a superpower.

## Framework

- **Vitest** — tests unitaires et composants
- **Playwright** — tests e2e (à venir)

## Lancer les tests

```bash
pnpm test          # run once
pnpm test:watch    # watch mode
```

## Structure

```
__tests__/          # Tests unitaires (logique métier)
e2e/                # Tests Playwright e2e
```

## Conventions

- Fichiers : `__tests__/*.test.ts`
- Describe par domaine fonctionnel, `it` en français décrivant le comportement attendu
- Assertions concrètes : jamais `toBeDefined()`, toujours tester ce que le code FAIT
- Régression : préfixe `// Regression: ISSUE-NNN` + date + lien rapport

## Layers

| Layer | Outil | Quand |
|-------|-------|-------|
| Unitaire | Vitest | Fonctions de calcul, parsers |
| Composant | Vitest + @testing-library/react | Composants interactifs |
| E2E | Playwright | Flows complets (calculatrice, export PDF) |
