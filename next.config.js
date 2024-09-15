const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = () => {
	return {
		experimental: {
			esmExternals: false,
		},
		images: {
			domains: [
				"firebasestorage.googleapis.com",
				"static.toiimg.com",
				"oaidalleapiprodscus.blob.core.windows.net",
				"picsum.photos",
			],
		},
		env: {
			SUPABASE_KEY:
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJidmlld21zcWd0ZXB3a2JwYWtsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2ODc3MDYyMCwiZXhwIjoxOTg0MzQ2NjIwfQ.quS6qtS81uaJ2QRgoZ4PyDXIQQvmbk0nHyaZs-xOOEM",
			apiKey: process.env.apiKey,
			authDomain: process.env.authDomain,
			projectId: process.env.projectId,
			storageBucket: process.env.storageBucket,
			messagingSenderId: process.env.messagingSenderId,
			appId: process.env.appId,
			measurementId: process.env.measurementId,
		},
		transpilePackages: ["gsap"],
		webpack: (config) => {
			config.node = {
				fs: "empty",
				child_process: "empty",
				net: "empty",
				dns: "empty",
				tls: "empty",
			};
			return config;
		},
		...withBundleAnalyzer({}),
	};
};
