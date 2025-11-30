// Advent Calendar Data - Each day has special content
const calendarData = {
    1: {
        type: 'milestone',
        icon: '🎄',
        title: 'Christmas Begins',
        message: 'Hiiiiii, my very very loved princess!!! This is the first day of your lil advent calendar! Its nothing big, but my love for you is HUGEEE! Manyy kisses and hugs for you, my panda and wife! 🎄💕',
        canOpen: false
    },
    2: {
        type: 'memory',
        icon: '☕',
        title: 'Coffee',
        message: 'You lil eepy eepy cutie! I know you went to bed too late agian. But you also look so cute while sleeping! I CANT!! Soon we can wake up next to each other <33 Have a great day, my love! And dont drink too much coffee 💕',
        canOpen: false
    },
    3: {
        type: 'surprise',
        icon: '🌟',
        title: 'Daily Reminder',
        message: 'Just a little reminder that you are absolutely my favourite and such a perfect person. Your laugh is my favorite sound, your hair has my favourite smell, your skin is my favourite touch! I love you sooo much. Your the best person on the worldddd ✨',
        canOpen: false
    },
    4: {
        type: 'memory',
        icon: '🎵',
        title: 'Our Song muawww',
        message: 'I collected a few songs that remind me of you: Con la Brisa, KYKY2BONDY, Every Two Lips song, a deux, ... and the more I searched the more I realised that every song reminds me of you. I have so many memories of us that no matter what I hear I have to think of you. Your in my head all the time. <33',
        canOpen: false
    },
    5: {
        type: 'milestone',
        icon: '🏠',
        title: 'At Home with youu',
        message: 'Cant wait to be with you at your home in Paris, like we live toghether. We could cook together, watch movies, or just sit and watch family guy. As long as we are together forever 💕🏡❤️',
        canOpen: false
    },
    6: {
        type: 'surprise',
        icon: '📸',
        title: 'Picture Perfect',
        message: 'I could now say your picture perfect, but this is OBVIOUS. but did you know that I became kinda addicted to looking at your pictures. Last day I got lost at looking at you and didnt realised that everybody else was leaving the lecture room and I was sitting alone inside. I even missed my bus after <3 📷✨',
        canOpen: false
    },
    7: {
        type: 'memory',
        icon: '🍝',
        title: 'Cooking in Heaven',
        message: 'You remember the game heaven? Our first cake might broke, but in heaven we were master bakers. The cake was still one of the best I ate yet ngl. Maybe it was cause I ate it next to you 👨‍🍳💕',
        canOpen: false
    },
    8: {
        type: 'surprise',
        icon: '🌙',
        title: 'Goodnight Kisses',
        message: 'I hope you still have my goodnight kiss of yesterday on your lips. I will give you another one and another one and ill kiss you so much that we kissed until we couldnt breath but so sweet. And every night ill give you goodnight kisses, that my gorgeous honey bear can sleep in peace. 🌙💤',
        canOpen: false
    },
    9: {
        type: 'memory',
        icon: '🎮',
        title: 'Discord Games',
        message: 'If I would not know you and I saw you, I would think that you are just a cute girl, but your motivation and passion for so many things is such a warm part of you. If it is your love for architecture or the need to beat me in discord games (and in real-life T.T) your so strong and I love this soo much 💝🎯🏆',
        canOpen: false
    },
    10: {
        type: 'milestone',
        icon: '📚',
        title: 'Bedtime Stories',
        message: 'Lay down I will read you a story. A story about us, a story which will make you feel like the most important, seen, loved and beautiful girl. Its about this girl which is you and a feeling deep in your heart which you love and will never lose. Close your eyes and listen to the sound of safety and trust. Trust me, i love you!! 💖✨',
        canOpen: false
    },
    11: {
        type: 'surprise',
        icon: '🌸',
        title: 'Summer in Winter',
        message: 'When summer ended I told it to come right back, cause ive been waiting for it. I waited so long and then it was so fast over. I couldnt feel the sun shine on my arm anymore and it got less lightful. So sad that the summer could just stay for 2 weeks in my arms. 🦋☀️',
        canOpen: false
    },
    12: {
        type: 'milestone',
        icon: '⭐',
        title: 'Halfway There!',
        message: '12 days done, 12 to go! But all days, not a single day less, are just for you and just filled with feelings I have while writing and feelings I hope you feel too when reading my daily texts. You are the love of my life! Please never forget how strong our love is~ 🌟💕',
        canOpen: false
    },
    13: {
        type: 'surprise',
        icon: '🛁',
        title: 'Shower Date',
        message: 'You look gorgeous. You look stunning. You look incredible. You look wifey. You look like a cat feel out of the bathtub. Your my dream girl (Your my dream girl). It would be so cool to have a shower with you. And I could be stunned, blushing and simping about this perfect girl with the perfect body I got. 🧼💕',
        canOpen: false
    },
    14: {
        type: 'memory',
        icon: '🛍️',
        title: 'Fashion Icon',
        message: 'You my angel are a fashion icon. Like a model no matter what you wear and shining out on every picture. Shining and making my eyes glimmer. You tell me what I should wear, I say no, but in the end you are always right, always my fashion icon and the only real fashion star. My star... 💝✨',
        canOpen: false
    },
    15: {
        type: 'memory',
        icon: '🎬',
        title: 'If your life was a movie it would be a Ghibli',
        message: 'I wanna grab you, lift you up and bring you to the bedroom. You see a big light projected movie on the wall. Its not on a TV but on a wall and a couch facing right at it. I wanna softly let you down on it and cuddle to you and watch as many Ghibli movies until you fall asleep in my arms and drawl cutely on my arm around your stomach. This is where I wanna be. 🍿❤️',
        canOpen: false
    },
    16: {
        type: 'surprise',
        icon: '🎨',
        title: 'Your Art!',
        message: 'I was scrolling though the liked Insta posts of friends. From time to time i saw a video of you, watched it whole and remained in silence thinking how beautiful it is to have a lady as my girlfriend, who is so passionate about what she does that it is fully her personallity. I cant wait to see every day of you decorating our house and seeing you develop at what you do. And you might not just decorate our house but also our hearts. Make mine so beautiful, that I never fear the winter again. Lets make our love be the prettiest artpice in existence <3 🖌️🌈',
        canOpen: false
    },
    17: {
        type: 'memory',
        icon: '💗',
        title: 'Can we...',
        message: 'Can we kiss? Right now? Just a lil kiss on the lips? Just a lil longer? 💗 Can we kiss forever and never let go from each other. Can we kiss and you wear a swimsuit with yellow straps. Can we kiss and hold eye contact while holding each other and never wanting to leave this moment? Can we kiss? Can we make it last forever? Forever and always 💓💓💓',
        canOpen: false
    },
    18: {
        type: 'surprise',
        icon: '🚄',
        title: 'Fast as fuck',
        message: 'ICEs are cool. TGVs are cool. I like to drive with them. I like to be super fast with them. I love being so so so fast with you. And its just 10 Days until im speeding in your direction. Speeding to see you as fast as possible. And its just 10 Days until I can look in your eyes and tell you that I was super fast. Super fast because I love you 🚄💓',
        canOpen: false
    },
    19: {
        type: 'memory',
        icon: '🍪',
        title: 'Chocolate',
        message: 'We both love brown things. And I dont just mean chocolate. And even if im melting already when I see your smile, I hereby ask you for a Date. Do you, Apolline, go on a chocolate fondue date with me? Do you, princess, spend time with me eating chocolate until our mouths are surrounded by chocolate and do you, my sweet pretty panda, be sweeter on the date as the chocolate? I hope you do 🥘❤️',
        canOpen: false
    },
    20: {
        type: 'milestone',
        icon: '💎',
        title: 'Almost Christmas!',
        message: 'Twenty days of love letters, and there are still so many new ways to say how amazing you are! You are my precious diamond, my greatest treasure, my hearts home! My favourite jewerly! 💍✨',
        canOpen: false
    },
    21: {
        type: 'surprise',
        icon: '🎆',
        title: 'New Year',
        message: 'Time is fast, you not. Time passes, but you stay the same beautiful light in my life. A new year will start, but you will be the same funny person I knew before and you will be mine so much like the year before. Some things are new, but you will always explode in my heart like a thousand beautiful fireworks and fill me with joy. Im sending you thousands of kisses my girl 🎇❤️',
        canOpen: false
    },
    22: {
        type: 'memory',
        icon: '🐼',
        title: 'Panda Love',
        message: 'Holding you close. Touch me with a kiss. Tell me its love, tell me its real. And stay cuddled up in this position on me. A lil funny, a lil goofy, sweet without limit and completly in love with me. This is how I see you and this where I wanna be. This is why im giving you all my love. This is why you are my forever mine panda love 🐼💕',
        canOpen: false
    },
    23: {
        type: 'surprise',
        icon: '🎁',
        title: 'Gift',
        message: 'The greatest gift Ive ever received is your love. You didnt came wrapped in a box, but for me you where better than any other gift! So much that still I just wish for you every christmas. Again and again because this gift made me addicted and completly passionate for it. Its all about you. Your my dream girl. It was always just about you. Thank you that your mine 🎀💝',
        canOpen: false
    },
    24: {
        type: 'special',
        icon: '🎅',
        title: 'Merry Christmas!',
        message: 'Merry Christmas, my love! 🎄 Every gift of this advent calendar is just to celebrate the biggest gift in my life - YOU! Thank you for making every single day feel like Christmas morning. I love you more than words can express, more than stars in the sky, and more than all the Christmas presents in the world! Lets have many more Christmases together, my beautiful angel! My loved romantic panda, my eversything, my sweet, cute, pretty, super funny, intelligent, kind, happy, favourite girl in the universe. I love you sooo soooo sooooooooo muchhhhhhhh. MUAWWWWWWWW See you soon! I love you. kisses <33 🎅💕👼',
        canOpen: false
    }
};