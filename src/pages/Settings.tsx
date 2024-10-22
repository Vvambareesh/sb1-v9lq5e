import React from 'react';
import ProfileSettings from '../components/settings/ProfileSettings';
import SecuritySettings from '../components/settings/SecuritySettings';
import NotificationSettings from '../components/settings/NotificationSettings';

const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <ProfileSettings />
      <SecuritySettings />
      <NotificationSettings />
    </div>
  );
};

export default Settings;