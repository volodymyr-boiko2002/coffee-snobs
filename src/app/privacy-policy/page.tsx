import React from 'react';

const PrivacyPolicy = () => (
    <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-4">Privacy Policy</h1>
        <p className="text-lg">
            Welcome to Coffee Snobs. This website was created for educational purposes only. We want to clarify that
            Coffee Snobs is not affiliated with or endorsed by any actual coffee brand or company. It is an educational
            project to help learn about web development.
        </p>
        <h2 className="text-xl font-semibold mt-6">What Information Do We Collect?</h2>
        <p>
            We do not directly collect any personal information. Coffee Snobs does not ask for your name, email address, or any other personal data.
            However, we use <strong>Vercel Analytics</strong> and <strong>Speed Insights</strong> to gather anonymous, non-identifying information 
            such as page views, load times, device type, and general location (e.g., country or region). This helps us understand how the site is used 
            and improve performance.
        </p>
        <h2 className="text-xl font-semibold mt-6">Do We Use Cookies?</h2>
        <p>
            Coffee Snobs does not use cookies for tracking or personalization. Your visit is cookie-free from our end.
            However, third-party services like Vercel Analytics may use cookies or similar technologies as part of their operation. 
            You can read more in <a href="https://vercel.com/legal/privacy-policy" className="text-blue-600" target="_blank" rel="noopener noreferrer">Vercel’s Privacy Policy</a>.
        </p>
        <h3 className="text-xl font-semibold mt-6">Third-Party Services</h3>
        <p>
            We use Vercel Analytics and Speed Insights to monitor and improve website performance. These services may collect anonymous technical data,
            but we do not receive or store any personally identifiable information. We do not sell, share, or transfer your data, because we don’t have it.
        </p>

        <h4 className="text-xl font-semibold mt-6">Your Rights Under GDPR</h4>
        <p>
            If you are located in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR),
            including the right to access, correct, or erase any personal data we may hold. In our case, we do not store any such data ourselves.
            You can control data collection by adjusting your browser’s privacy settings or using tools that block analytics scripts.
        </p>
        <h5 className="text-xl font-semibold mt-6">How Do We Protect Your Privacy?</h5>
        <p>
            Since we do not store any personal data, there is no information to protect. That said, we follow standard best practices 
            to ensure the site runs smoothly and securely for all visitors.
        </p>
        <h6 className="text-xl font-semibold mt-6">Changes to This Privacy Policy</h6>
        <p>
            We may update this privacy policy from time to time. Any changes will be reflected on this page.
        </p>
        <p className="mt-6 text-sm">
            Coffee Snobs - Created for educational purposes. No affiliation with any coffee brand.
        </p>
    </div>
);

export default PrivacyPolicy;
