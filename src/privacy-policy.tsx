export const PrivacyPolicy = () => {
  return (
    <div className="max-w-6xl w-[90%] mx-auto md:mx-0">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
          Privacy Policy
        </h1>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
            What is this Privacy Policy?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4">
            This document explains how LessScreen protects your privacy and
            handles any information when you use our Android app. We believe in
            complete transparency about how our app works with your data.
          </p>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
            How We Handle Your Data
          </h2>

          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-medium mb-2">
              App Usage Information
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-2">
              When you use LessScreen, we access the following information from
              the Android OS:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg text-gray-300 ml-4">
              <li>How long you use different apps on your phone</li>
              <li>When you use these apps</li>
              <li>Your screen time patterns</li>
            </ul>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-4 font-medium">
              Important: All this information stays only on your phone. We never
              see it or store it anywhere else.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-medium mb-2">
              App Permissions We Need
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-2">
              LessScreen needs certain permissions to work properly:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg text-gray-300 ml-4">
              <li>
                Permission to see app usage: This lets us show you how much
                you're using your apps
              </li>
              <li>
                Permission to be your home screen: This lets LessScreen work as
                your phone's main screen
              </li>
              <li>
                Permission to show notifications: This lets us send you helpful
                reminders about your screen time
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
            Where Your Data is Stored
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg text-gray-300 ml-4">
            <li>Everything stays on your phone</li>
            <li>We don't use any cloud storage</li>
            <li>We don't have any servers storing your information</li>
            <li>
              When you uninstall LessScreen, all data is automatically removed
            </li>
          </ul>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
            Search Features and Other Services
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg text-gray-300 ml-4">
            <li>
              If you use the search feature, your searches will be sent to
              search providers (like Google) just like when you search in a web
              browser
            </li>
            <li>
              If you connect to Nextcloud (optional), that connection follows
              Nextcloud's own privacy rules
            </li>
          </ul>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
            Keeping Your Data Safe
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg text-gray-300 ml-4">
            <li>
              Your information is protected by your phone's own security (like
              your screen lock)
            </li>
            <li>
              You don't need to create an account or remember any passwords
            </li>
          </ul>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
            Your Rights and Controls
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-2">
            You are in complete control:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg text-gray-300 ml-4">
            <li>
              You can delete all app data anytime through your phone's settings
            </li>
            <li>You can turn off usage tracking if you don't want it</li>
            <li>You can choose which features you want to use</li>
            <li>You can use as many or as few features as you like</li>
          </ul>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
            Updates to This Policy
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            If we need to change this privacy policy, we'll let you know through
            the app when you update it. Any changes will be clearly explained.
          </p>
        </section>
      </div>
    </div>
  );
};
