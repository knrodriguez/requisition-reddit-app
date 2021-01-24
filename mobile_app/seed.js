const { db, User, Post, Requisition} = require('./server/db');

const seed = async() => {
    await db.sync({force:true})

    const tester = await User.create({
        username: 'myUsername', 
        password:'myPassword'
    });

    const secondTester = await User.create({
        username: 'myUsername2', 
        password:'myPassword2'
    });

    const reqPolitics = await Requisition.create({
        searchString: 'mitch mcconnell',
        subReddits: ['politics','democrats','republicans'],
        userId: secondTester.id
    })

    const reqTest = await Requisition.create({
        searchString: 'test',
        subReddits:['Adviceanimals'],
        userId: tester.id
    })

    const post1 = await Post.create({
        title: `Mitch McConnell's Louisville home vandalized following his blockage of $2,000 checks`,
        redditUrl: 'https://www.reddit.com/r/politics/comments/kozwsy/mitch_mcconnells_louisville_home_vandalized/',
        subReddit: 'politics',
        requisitionId: reqPolitics.id
    })

    const post2 = await Post.create({
        title: 'I keep seeing advertisements for it - TEST',
        redditUrl: 'https://www.reddit.com/r/AdviceAnimals/comments/koz6qm/i_keep_seeing_advertisements_for_it/',
        subReddit: 'AdviceAnimals',
        requisitionId: reqTest.id
    })

    const post3 = await Post.create({
        title: 'Life pro tip test',
        redditUrl: 'https://www.reddit.com/r/AdviceAnimals/comments/kl65xg/life_pro_tip/',
        subReddit: 'AdviceAnimals',
        requisitionId: reqTest.id
    })

    const reqDog = await Requisition.create({
        searchString: 'dog',
        subReddits:['aww','dogs'],
        userId: tester.id
    })

    db.close();
    console.log('Database Seeded!');
}

seed().catch(err => {
    db.close();
    console.log(`Error seeding: ${err.message}, ${err.stack}`);
})