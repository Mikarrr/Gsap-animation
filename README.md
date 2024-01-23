# Projekt Animacji GSAP

## Spis treści

1. [Opis projektu](#opis-projektu)
2. [Instrukcja uruchomienia](#instrukcja-uruchomienia)
3. [Animacje](#animacje)
4. [Struktura plików](#struktura-plików)
5. [Zależności](#zależności)

## Opis projektu

Repozytorium zawiera prostą stronę internetową z animacjami stworzonymi przy użyciu biblioteki GSAP.

## Instrukcja uruchomienia

1. Sklonuj to repozytorium na swój lokalny komputer.
2. Otwórz plik `index.html` w przeglądarce internetowej.

## Animacje

Projekt zawiera różne animacje zaimplementowane przy użyciu GSAP. Poniżej znajduje się krótki opis każdej animacji:

- **Animacje w sekcji "main_container2":** Animacje dla kwadratów przy użyciu efektu przewijania.
- **Animacje w sekcji "main_container4":** Animacja przycisku "Play", "Pause", "Restart" dla kwadratu.
- **Animacje w sekcji "main_container5":** Animacja okręgu przy użyciu przewijania.
- **Animacje w sekcji "main_container6":** Animacje dla trzech kontenerów.
- **Animacje w sekcji "main_container10":** Animacje dla bloków w pionie przy użyciu przewijania.
- **Animacje w sekcji "main_container11":** Animacje dla bloków w siatce.
- **Animacje w sekcji "main_container13":** Animacje dla dwóch głównych kontenerów.

## Struktura plików

- `index.html` - Plik główny HTML.
- `style.css` - Arkusz stylów.
- `gsap.js` - Skrypt GSAP zdefiniowany w pliku JavaScript.

## Zależności

Projekt korzysta z biblioteki GSAP w wersji 3.12.3, której skrypty są załadowane z CDN.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/ScrollTrigger.min.js"></script>
