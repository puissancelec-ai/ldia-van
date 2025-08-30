
# LDIA VAN — Site gratuit (Vercel + Supabase)

Fonctionnalités gratuites :
- Hébergement **Vercel** (gratuit) avec domaine `ldia-van.fr`
- **Avis** stockés dans **Supabase** (gratuit), avec **modération**
- **Disponibilités** via intégration **Google Calendar**
- Galerie photos, contact

## Déploiement rapide

1. **Créer un projet Supabase** (gratuit) → récupérez `PROJECT URL` et `ANON KEY`.
2. Dans Supabase SQL, exécutez :

```sql
create table if not exists reviews (
  id bigint generated always as identity primary key,
  name text not null,
  rating int not null check (rating between 1 and 5),
  message text not null,
  approved boolean not null default false,
  created_at timestamp with time zone default now()
);
alter table reviews enable row level security;

-- Lecture publique uniquement des avis approuvés
create policy "Public read approved" on reviews
for select using (approved = true);

-- Tout le monde peut créer un avis (restera non approuvé)
create policy "Anyone can insert pending" on reviews
for insert with check (approved = false);
```

3. **Vercel** → New Project → Import depuis GitHub (ou "deploy" via CLI).
4. Dans **Vercel → Settings → Environment Variables** :
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. **Deploy** → Ouvrez `/reviews` pour tester.

## Modifier les pages

- Accueil : `app/page.tsx`
- Disponibilités : `app/availability/page.tsx` (remplacez l'URL de l'iframe Google Calendar)
- Avis : `app/reviews/page.tsx` (formulaire public + modération)
- Contact : `app/contact/page.tsx`
- Styles : `app/globals.css`

## Ajouter des photos
Placez vos images dans `public/images/van1.jpg` ... `van6.jpg`.

## Modération des avis
Dans **Supabase → Table Editor → reviews**, changez `approved` à **true** pour valider un avis (il deviendra visible sur le site).

## Domaine
- Dans Vercel → **Domains**, ajoutez `ldia-van.fr` + `www.ldia-van.fr`
- Dans OVH → Zone DNS : 
  - `www` → CNAME vers le domaine généré par Vercel
  - Domaine nu → A records vers Vercel (ou utilisez l’option "Vercel DNS" si vous préférez gérer chez eux)
