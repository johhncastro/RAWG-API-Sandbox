const Rawger = require('rawger');

// initialize rawger with default 60s cache
// you can supply a different timeout
// or use rawger.purgeCache(); to force-clear the cache altogether
// check Caching section of the docs to learn more
// ⚠️ starting with v1.1 you need to always await the init process
const rawger = await Rawger();
const { users } = rawger;

// get "Currently Playing" games for user
const playing = (await users('orels1').games('playing')).get();

// get count of owned games
const owned = (await users('orels1').games('owned')).count();

// get raw api response object for "Want to Play" games
const raw = (await users('orels1').games('toplay')).raw();

// get user profile
const profile = (await users('orels1').profile()).get();

// get next page for the paginated endpoints
const games = await (await users('orels1').games('owned')).next();
const nextGames = games.get();

// get user's collections
const collections = (await users('orels1').collections()).get();

// get user's reviews
const reviews = (await users('orels1').reviews()).get();

// Get games matching 'witcher'
const searchResults = (await games.search('witcher')).get();

// Get single game by slug
const searchResults = (await games.get('the-witcher-3-wild-hunt')).get();