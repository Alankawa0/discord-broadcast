module.exports = {
    bot: {
        tokens: [
          "MTMzNDk0Mzg1MDUzOTY0Njk3Ng.Gw6Ni4.SJrzqZ4AUH84udIeiLwbWfbM6nrsTGvgEFrcTo",              // Main bot token - Replace with your actual token
        //  "YOUR_SECOND_BOT_TOKEN_HERE",      // 2 bot token - Uncomment and replace to use
        //  "YOUR_THIRD_BOT_TOKEN_HERE",       // 3 bot token - Uncomment and replace to use
        //  "YOUR_FOURTH_BOT_TOKEN_HERE",      // 4 bot token - Uncomment and replace to use
        //  "YOUR_FIFTH_BOT_TOKEN_HERE",       // 5 bot token - Uncomment and replace to use
        ].filter(Boolean),

        defaultLanguage: 'en', // ar | en لغة البوت
        
        activity: {
            name: 'BOT', // رسالة حالة البوت
            type: 'WATCHING', // PLAYING, STREAMING, LISTENING, WATCHING, COMPETING
            status: 'dnd' // online, idle, dnd, invisible
        }
    },
    server: {
        guildId: '739408333362036746',         // ايدي السيرفر
        broadcastRoleId: '1354415856356163616', // ايدي الرول اللي يستخدم عليها البوت
        reportChannelId: '1360039251403608205' // ايدي الروم اللي يرسل فيه البوت التقارير
    },
    broadcast: {
        cooldownTime: 1000, // لا تلعب فيها
        memberCooldown: 100, // لا تلعب فيها
        requestsPerSecond: 1 // لا تلعب فيها
    },

    colors: {
        primary: '#5865F2',    // Discord Blue (used for standard messages)
        success: '#57F287',    // Green (used for successful operations)
        warning: '#FEE75C',    // Yellow (used for warnings)
        error: '#ED4245',      // Red (used for errors)
        neutral: '#5D5D5D'     // Gray (used for neutral messages)
    }
};
