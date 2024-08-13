import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'ReelHype terms of service',
};

const TermsOfService = () => (
    <div className="container prose mx-auto max-w-none px-4 py-8">
        <h1 className="mb-4 text-3xl font-bold">ReelHype Terms of Service</h1>

        <p>
            Welcome to ReelHype! These Terms of Service (&quot;ToS&quot;) govern
            your use of our movie and TV trailer platform. By accessing or using
            ReelHype, you agree to be bound by these ToS. Please read them
            carefully.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">Acceptance of Terms</h2>

        <p>
            By using ReelHype, you affirm that you are at least 13 years old and
            capable of entering into a legally binding agreement. If you are
            under 18, you represent that you have your parent or guardian&apos;s
            permission to use our services.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">User Accounts</h2>

        <ul>
            <li>
                You may need to create an account to access certain features.
            </li>
            <li>
                You are responsible for maintaining the confidentiality of your
                account information.
            </li>
            <li>
                We reserve the right to terminate or suspend accounts that
                violate these ToS.
            </li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">User Conduct</h2>

        <ul>
            <li>You agree to use ReelHype only for lawful purposes.</li>
            <li>
                You must not post or share content that is illegal, harmful, or
                violates the rights of others.
            </li>
            <li>
                We reserve the right to remove any content that violates these
                ToS.
            </li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">Intellectual Property</h2>

        <p>
            ReelHype and its content are protected by intellectual property
            laws. You may not use our content without our permission.
        </p>

        {/* ... (Add more sections as needed, e.g., Termination, Disclaimer of Warranties, Limitation of Liability, etc.) */}

        <h2 className="mt-8 text-2xl font-semibold">Changes to These Terms</h2>

        <p>
            We may update these ToS from time to time. We will notify you of any
            changes by posting the new ToS on our website.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">Contact Us</h2>

        <p>
            If you have any questions or concerns about these ToS, please
            contact us at [email&#160;protected]
        </p>
    </div>
);

export default TermsOfService;
