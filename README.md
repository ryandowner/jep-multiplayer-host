# Jep!

Play Jeopardy! online with your friends at [Jep!][jep]. Choose from past games or make your own. Just share the link to play with friends.

:earth_americas: Play a game: [https://whatis.club][jep]

:newspaper: Read the blog post: [https://clairenord.com/jep.html][blog]

## Development

To run the app locally, first install [Docker][docker].

Next, install the project's local dependencies:

```sh
npm install
```

Start the Supabase project:

```ts
npm run db:start
```

Set environment variables. In particular, set `SUPABASE_URL`,
`SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` from the results of `npx
supabase status`.

```sh
cp .env.example .env
vim .env # add secrets to .env
source .env
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

## Supabase

View the local Supabase dashboard at
[http://localhost:54323/](http://localhost:54323/).

View mock emails sent for password reset and email verification at
[http://localhost:54324/](http://localhost:54324/).

Link to your own production Supabase project with:

```sh
npx supabase link --project-ref $SUPABASE_PROJECT_REF --password $SUPABASE_DB_PASSWORD
```

### Make a migration[^1]

```sh
npx supabase db diff -f my_migration_name
```

### Deploy a migration[^2]

```sh
npx supabase db push
```

### Generate Typescript types from the database schema:

```sh
npx supabase gen types typescript --linked > app/models/database.types.ts
```

## Setup for Game Night! - How to Play ##

### 🏠 Playing Remotely (Different Locations)

When playing with friends who aren't in the same physical location:

🎧 **Join a voice call together** - Use Zoom, Discord, Teams, Facetime, or any voice chat platform
👉 **Choose the clue when you have board control** - Click on any clue to select it
👀 **Wait until the buzzer opens** - The clue will be read aloud and the buzzer will activate
🚨 **Buzz in when you know the answer** - Click the buzzer button as fast as you can!
🗣️ **Fastest buzzer guesses out loud on the call** - Say your answer to everyone.
🙊 **Fastest buzzer checks the correct answer privately** - Don't say the answer out loud!
⚡  **Swoop in when others are wrong** - If the first person is incorrect, others can buzz in
⚖️ **Wager carefully on hidden Double Down clues** - Some clues have special wagering rules

### 🏠 Playing in the Same Place (Host Mode)

When everyone is physically together, use **Host Mode** for the best experience:

#### Step 1: Set Up Your Host Device (This user does not play)
1. **Create your account** and start a game
2. **Go to Host Mode** by adding `?mode=host` to your room URL: `room/<roomID>?mode=host`
3. **Enter your name** or add "HOST" as your name for so others know. First person in takes control of the board.
4. **Use this device** (iPad, tablet, or laptop) as your **HOST board device** - this controls the game flow

#### Step 2: Set Up Your Display Device
1. **Login as the same user** on another device (phone, tablet, or laptop)
2. **Go to the regular room page**: `room/<roomID>` (without the `?mode=host` parameter)
3. **Connect this device** to your main TV via HDMI or screen casting
4. **This becomes your display device** - showing the game board, clues, and answers on the big screen

#### Step 3: Player Devices
- **Each player** uses their own phone/device to join the same room link when the host is ready
- **Enter your name** or keep the random emoji generated for you and join the game
- **The main TV** shows the game for spectators and the players to follow along

#### Host Mode Benefits:
- **Host controls the game flow** from their device
- **Main TV displays** the current game state for everyone to see
- **Players interact** on their individual devices
- **Spectators can watch** the game progress on the big screen
- **Perfect for game nights** where some people want to watch and others want to play

### How to Buzz
Practice your buzzing skills on the `/howto` page. The clue will be shown and the buzzer will be "Open" for buzzing once the initial "open buzzer" timer is complete. You will see a visual reference of when the buzzer opens at the top of the page when the clue is being read.

Buzz in too early and you will get a `250ms` lockout before you can buzz again! Happy buzzing!

### 🎮 Game Controls

- **Click any clue** to select it
- **Click the buzzer** when you want to answer
- **Click "Check Answer"** to see if you're correct
- **Use the wager form** for Daily Double and Final Jeopardy clues

## Tools used

- Web framework: [Remix](https://remix.run/) bootstrapped by
  [create-remix](https://www.npmjs.com/package/create-remix)
- CSS framework: [Tailwind CSS](https://tailwindcss.com/)
- Hosting, deployment: [Vercel](https://vercel.com)
- Database: [Supabase](https://supabase.com/)
- UI components: [Radix UI](https://radix-ui.com/)

## Thanks

- [Making a Basic React + Firebase
  App](https://paper.dropbox.com/doc/Making-a-Basic-React-Firebase-App--Bys208PiI1n34J9lnkc7lzRxAg-oepkAUyjqbd7Ts0hIB8U4)
  by [jynnie](https://github.com/jynnie)
- [jeopardy-remixable-app on Glitch](https://jeopardy-remixable-app.glitch.me)
  ([source](https://glitch.com/~jeopardy-remixable-app))
- [jarchive-json on Glitch](https://jarchive-json.glitch.me)
  ([source](https://glitch.com/~jarchive-json))
- [Cluebase](https://cluebase.readthedocs.io/en/latest/)
  ([API](cluebase.lukelav.in/), [source](https://github.com/lukelavin/cluebase))

## License

[MIT](https://github.com/cmnord/jep/blob/main/LICENSE) ©
[cmnord](https://github.com/cmnord/)

[jep]: https://whatis.club
[blog]: https://clairenord.com/jep.html
[docker]: https://www.docker.com/

[^1]: https://supabase.com/docs/guides/cli/local-development#database-migrations
[^2]: https://supabase.com/docs/guides/cli/local-development#deploy-database-changes
