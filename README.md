### Instrukcja uruchomienia aplikacji i korzystania z niej

#### Krok 1: Instalacja Vite

Vite to szybki i lekki bundler do projektów JavaScript/TypeScript, który jest świetnym narzędziem do tworzenia aplikacji front-endowych. Aby zainstalować i uruchomić projekt za pomocą Vite, wykonaj poniższe kroki:

1. **Zainstaluj Node.js i npm** (jeśli jeszcze nie masz zainstalowanego Node.js):
   - Pobierz i zainstaluj Node.js ze strony [nodejs.org](https://nodejs.org/).
   - Po instalacji sprawdź wersję Node.js i npm, wpisując w terminalu:
     ```bash
     node -v
     npm -v
     ```

2. **Zainstaluj Vite**:
   - W katalogu swojego projektu otwórz terminal i wpisz następujące polecenie, aby stworzyć nowy projekt z Vite:
     ```bash
     npm create vite@latest
     ```
   - Vite poprosi o nazwę projektu. Wprowadź nazwę projektu, np. `reward-dashboard`, i wybierz framework **React** (jeśli projekt używa Reacta).
   
   - Następnie przejdź do katalogu projektu:
     ```bash
     cd reward-dashboard
     ```

3. **Zainstaluj zależności projektu**:
   - W terminalu wpisz:
     ```bash
     npm install
     ```
   - To polecenie zainstaluje wszystkie niezbędne pakiety.

4. **Uruchom aplikację**:
   - Aby uruchomić projekt w trybie deweloperskim, wpisz:
     ```bash
     npm run dev
     ```
   - Vite uruchomi serwer deweloperski, który będzie dostępny na lokalnym porcie (domyślnie `http://localhost:5173`). Otwórz tę stronę w przeglądarce.

#### Krok 2: Korzystanie z aplikacji

Po uruchomieniu aplikacji zobaczysz interfejs **Dashboardu**, który wyświetla listę użytkowników oraz ich transakcje i punkty nagród. Poniżej znajdziesz instrukcję, jak korzystać z aplikacji:

1. **Wybór użytkownika**:
   - Na stronie głównej aplikacji znajdziesz rozwijane menu (`select`), które pozwala wybrać jednego z użytkowników.
   - Kliknij rozwijane menu i wybierz nazwę użytkownika, dla którego chcesz zobaczyć szczegóły.

2. **Wyświetlenie transakcji i punktów nagród**:
   - Po wybraniu użytkownika, aplikacja wyświetli informacje na temat jego transakcji.
   - Zobaczysz dwie główne sekcje:
     - **Lista transakcji**: Zawiera daty i kwoty transakcji użytkownika, posortowane według daty (od najnowszych do najstarszych).
     - **Punkty nagród**: Wyświetli miesięczne punkty nagród użytkownika za ostatnie trzy miesiące. Punkty nagradzane są za transakcje zgodnie z zasadami:
       - Za każdą kwotę powyżej 50$ naliczane są punkty, a dla kwot powyżej 100$ naliczane są dodatkowe punkty.

#### Krok 3: Struktura interfejsu

- **Dashboard**: Główna strona, na której możesz wybrać użytkownika z listy.
- **Customer Transactions**: Wyświetla szczegóły transakcji wybranego użytkownika.
- **Customer Rewards**: Pokazuje podsumowanie punktów nagród użytkownika za ostatnie trzy miesiące oraz całkowitą liczbę zdobytych punktów.

#### Krok 4: Obsługa błędów i ładowania

- Jeśli podczas pobierania transakcji wystąpi problem (np. błąd API), na ekranie zostanie wyświetlona informacja o błędzie.
- Gdy dane są pobierane, zobaczysz komunikat ładowania. 

#### Podsumowanie

1. **Zainstaluj Vite i uruchom projekt**.
2. **Wybierz użytkownika** z rozwijanego menu, aby zobaczyć jego transakcje i punkty nagród.
3. Aplikacja automatycznie pobiera dane transakcji i wyświetla punkty za ostatnie trzy miesiące.

## Uruchamianie testów

Aby uruchomić testy jednostkowe w tym projekcie, użyj polecenia `npm test`. Upewnij się, że masz zainstalowane wszystkie wymagane zależności. Możesz to zrobić, uruchamiając:
