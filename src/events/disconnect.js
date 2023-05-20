module.exports = {
    once: true,
	run: () => {
        console.warn('[MEOW] Disconnecting, Good bye!');
        process.exit(0);
    }
}