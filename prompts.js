//prompts
const prompts = {
    // WAKE
    wake: {
        text: 'You wake, confused and disoriented. Something just does not feel quite right. You reach over to the night stand, find a pair of glasses, put them on (even though you do not wear glasses) and stand up. What do you do next? [go back to bed or explore]',
        responses: {
            ['go back to bed']: 'wake_sleep', // choice 1
            explore: 'wake_explore' //choice 2
        },
    },
    wake_sleep: { // GAME OVER
        text: 'Your lack of desire has lead you towards a life of boredom and dread. [[GAME OVER]]',
        responses: {}
    },
    wake_explore: {
        text: 'As your eyes adjust to the early morning sun, you glance around the room. To your left, you notice a small, but sturdy bedside table. In front of you, a TV is broadcasting reruns of "Curb Your Enthusiasm". You also consider walking and exploring more of this strange room. What is your next inclination? [watch TV, walk, examine the table]',
        responses: {
            ['watch TV']: 'explore_TV',
            walk: 'explore_walk',
            ['examine the table']: 'explore_table',
        }
    },
    // EXPLORE ROOM
    explore_TV: { //GAME OVER
        text: 'You make yourself comfortable. You kick off your shoes, pile the covers and pillows over your body bask in the glory of laziness for eternity. [[GAME OVER]]',
        responses: {},
    },
    explore_table: {
        text: 'You situate your body leftwards so you can face the side table. Upon inspecting the wooden table, you quickly discover a wallet, keys and an energy drink. Which items do you examine? [wallet, drink, keys]',
        responses: {
            wallet: 'table_wallet',
            drink: 'table_drink',
            keys: 'table_keys',
        }
    },
    // table
    table_wallet: {
        text: 'Slowly, your hand moves towards the leather bound wallet. It looks worn, beat up and seems to have been used by someone for a long time. Anyways, you open it and are surprised by what you see. Unsure of what to do, do you put it back down or place it quickly in your back pocket? [put wallet back, keep]',
        responses: {
            ['put wallet back']: 'wallet_false',
            ['keep']: 'wallet_true'
        }
    },
    wallet_true: {
        text: 'Quickly, you pocket the wallet for safe keeping. Are you finished examining table? [Y or N]',
        responses: {
            N: 'explore_table',
            Y: 'wake_explore',
        }
    },
    wallet_false: {
        text: 'Are you finished examining table? [Y or N]',
        responses: {
            N: 'explore_table',
            Y: 'wake_explore',
        }
    },
    table_drink: {
        text: 'You could surely inhale an energy drink. The only question is, will you? [Y or N]',
        responses: {
            N: 'explore_table',
            Y: 'wake_explore',
        }
    },
    table_keys: {
        text: 'Three dirt embossed keys lay connected by a key ring. Do you clip them to your belt or place them where you found them? [belt or put keys back]',
        responses: {
            ['belt']: 'keys_true',
            ['put keys back']: 'keys_false',
        }
    },
    keys_true: {
        text: 'You grab the keys and snap them on your belt buckle. Lock and loaded! [Y or N]',
        responses: {
            N: 'explore_table',
            Y: 'wake_explore',
        }
    },
    keys_false: {
        text: 'You decide to leave the keys behind. Who needs them anyways? [Y or N]',
        responses: {
            N: 'explore_table',
            Y: 'wake_explore',
        }
    },
    // WALK AROUND ROOM
    explore_walk: {
        text: 'Walking around the room seems like a good idea. After all, you tell yourself, "I should at least aquainte and introduce myself to this bewildering experience. After a bit of pondering and wandering, you look straight ahead and notice a bathroom. To your right, a window. [bathroom or window]',
        responses: {
            bathroom: 'walk_bathroom',
            window: 'walk_window',
        }
    },
    // window
    walk_window: {
        text: 'Noises emanate from the window. Perhaps that is what drew you there. You peer out into the distance to view a society you have never seen before. It is a plausible society you think to yourself that could exist, but it certainly is not a place you have ever been to. You see a ladder leaning against the window. Any thoughts? Want to go back to the safety of the room? [ladder or bathroom]',
        responses: {
            ladder: 'window_ladder',
            bathroom: 'walk_bathroom',
        }
    },
    window_ladder: {
        text: 'You seem to face life like a warrior, but will that courage save you for the challenges to come? As you climb down the latter, the noises you heard from the room seem to be coming closer to you. Almost following you. You quickly realize those shooting voices are coming for you. As sweat drips down your face and as your heart pounds, you notice a ford f-150 parked in the driveway.Do you make a run for it on foot or take the truck? [run or truck]',
        responses: {
            run: 'ladder_run',
            truck: 'ladder_truck',
        }
    },
    ladder_run: {
        text: 'Looks like you might have to take your bravery to another level to get out of this debacle. As you begin sprinting your realize only a miracle can get you out of this one. Test your luck? [Y or N]',
        responses: {
            Y: 'run_true',
            N: 'run_false',
        }
    },
    run_true: { // YOU WIN
        text: 'Looks like it is your lucky day. Out of nowhere, a sloth and its owner just started to cross the crosswalk, bisecting your assailants. You quickly find the nearest bus, hop and bask in your new found glory. [[YOU WIN]]',
        responses: {}
    },
    run_false: { // GAME OVER
        text: 'Looks like luck is not on the horizon for you. Your assailants catch you, dragging you back where they came from for some nefarious reason you are unaware of.',
        responses: {}
    },
    ladder_truck: {
        text: 'Thankfully, you grabbed the keys when you had the chance. Fumbling, you finally unlock the door and start the car. You start speeding down the suburban roads and try to find a freeway. Everything seems to be going your way, but you catch a red light. Do you run the red or obey the law? [run or obey]',
        responses: {
            run: 'truck_run',
            obey: 'truck_obey',
        }
    },
    truck_run: { // YOU LOOSE
        text: 'Excitement reaches a maximum, voices scream, excruciating loud noises fill what used to be a void. You look left, You look right. You look around. You seem to be alive. [[YOU WIN]]',
        responses: {}
    },
    truck_obey: { // YOU WIN
        text: 'You are a law abiding citizen, but that gets you nowhere in the game of life and as a result you suffer the consequences. You are caught by your assailants and are identified as William Jacobs (a man convicted of credit card theft, and to you, you most definitely are not) and are swiftly taken away. [[GAME OVER]]',
        responses: {}
    },

    // bathroom
    walk_bathroom: {
        text: 'You pay no attention to the raucous and proceed into the bathroom. Noticing mold, stains and remanences of deceased insects, you deduce something is most definitely not right. As you step further away from the door and closer to the porcelain sink, you notice a mirror and comb. "How curious", you think to yourself. You have bed head, do you take the time to clean yourself up? [Y or N]',
        responses: {
            Y: 'bathroom_comb',
            N: 'bathroom_cabinet',
        }
    },
    bathroom_comb: { //GAME OVER
        text: 'As you begin to comb your hair, your throat begins to swell and burn. How could that be. As you fall towards the floor, you notice what you thought to be an energy drink to be a can of [[GAME OVER]]',
        responses: {}
    },
    bathroom_cabinet: {
        text: 'The cracked mirror exposes an array of pills, syringes, and most surprisingly, an small 1x1 in image of a sloth. What do you take anything? [sloth, pills or syringe]',
        responses: {
            sloth: 'cabinet_sloth',
            pills: 'cabinet_pills',
            syringe: 'cabinet_syringe',
        }
    },
    cabinet_pills: {
        text: 'You close the medicine cabinet and you suddenly begin to feel sick. Uncontrollably, you body shakes in an unprecedented seizure. Sweat pours from your body. Trembling emanates from your legs. Pounding heart beats rushes blood throughout your body and you collapse to the ground with a great force. Do you pop the pills to have a chance at saving your life, or do you test your luck? [pop the pills or chance it]',
        responses: {
            ['pop the pills']: 'pills_pop',
            ['chance it']: 'pills_chance',
        }
    },
    pills_pop: { //GAME OVER
        text: 'The pills most definitely did not help. If you had more time and read the label, you would have found out that they were fentanyl  [[GAME OVER]]',
        responses: {}
    },
    pills_chance: { // GAME OVER
        text: 'Looks like today is not your lucky day [[GAME OVER]]',
        responses: {}
    },
    cabinet_sloth: { // GAME OVER
        text: 'You close the medicine cabinet and you suddenly begin to feel sick. Uncontrollably, you body shakes in an unprecedented seizure. Sweat pours from your body. Trembling emanates from your legs. Pounding heart beats rushes blood throughout your body and you collapse to the ground with a great force. Your last waking moments are spent staring into the eyes of a sloth. [[GAME OVER]]',
        responses: {}
    },
    cabinet_syringe: {
        text: 'You close the medicine cabinet and you suddenly begin to feel sick. Uncontrollably, you body shakes in an unprecedented seizure. Sweat pours from your body. Trembling emanates from your legs. Pounding heart beats rushes blood throughout your body and you collapse to the ground with a great force. You have two options. Stab a corroding needle into your body to maybe save your life, or take a chance with a higher power. What do you do? [chance it or use syringe]',
        responses: {
            ['chance it']: 'syringe_chance',
            ['use syringe']: 'syringe_use',
        }
    },
    syringe_chance: { //YOU WIN
        text: 'Congratulations, the syringe was an antidote and saved you! [[YOU WIN]]',
        responses: {}
    },
    syringe_use: { //YOU WIN
        text: 'Congratulations, the cause of your fainting was justanxiety! [[YOU WIN]]',
        responses: {}
    },
}

// DATA STRUCTURE
/*
action: {
    text: 'prompt...',
    responses:{
        choice 1: 'next destination',
        choice 2: 'next destination',
        choice 3: 'next destination',
    }
},
*/