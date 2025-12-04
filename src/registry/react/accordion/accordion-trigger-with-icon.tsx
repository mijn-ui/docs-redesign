import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Label,
  Switch,
} from "@mijn-ui/react";
import { Bell, Shield, User } from "lucide-react";

const SettingsAccordion = () => {
  return (
    <Accordion
      className="w-full max-w-96"
      collapsible
      type="single"
      variant="splitted"
    >
      <AccordionItem value="account">
        <AccordionTrigger className="text-left hover:no-underline">
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-bg-brand-subtle p-2">
              <User className="text-lg text-on-bg-brand-subtle" />
            </div>
            <div>
              <div className="text-fg-default">Account Settings</div>
              <p className="mt-1 text-fg-tertiary text-sm">
                Manage your profile and preferences
              </p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4 pl-14">
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2">
                <div>
                  <Label htmlFor="public-profile">Public Profile</Label>
                  <p className="mt-1 text-fg-tertiary text-sm">
                    Make your profile visible to others
                  </p>
                </div>
                <Switch id="public-profile" />
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <Label htmlFor="show-email">Show Email</Label>
                  <p className="mt-1 text-fg-tertiary text-sm">
                    Display email on your profile
                  </p>
                </div>
                <Switch id="show-email" />
              </div>
              <div className="pt-2">
                <Button size="sm" variant="outlined">
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Notifications */}
      <AccordionItem value="notifications">
        <AccordionTrigger className="text-left hover:no-underline">
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-bg-brand-subtle p-2">
              <Bell className="text-lg text-on-bg-brand-subtle" />
            </div>
            <div>
              <div className="text-fg-default">Notifications</div>
              <p className="mt-1 text-fg-tertiary text-sm">
                Configure how you receive updates
              </p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4 pl-14">
            <div className="flex items-center justify-between py-2">
              <div>
                <Label htmlFor="email-notif">Email Notifications</Label>
                <p className="mt-1 text-fg-tertiary text-sm">
                  Receive updates via email
                </p>
              </div>
              <Switch defaultChecked id="email-notif" />
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <Label htmlFor="push-notif">Push Notifications</Label>
                <p className="mt-1 text-fg-tertiary text-sm">
                  Get browser notifications
                </p>
              </div>
              <Switch defaultChecked id="push-notif" />
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <Label htmlFor="marketing">Marketing Emails</Label>
                <p className="mt-1 text-fg-tertiary text-sm">
                  Receive product updates and offers
                </p>
              </div>
              <Switch id="marketing" />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Privacy & Security */}
      <AccordionItem value="privacy">
        <AccordionTrigger className="text-left hover:no-underline">
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-bg-brand-subtle p-2">
              <Shield className="text-lg text-on-bg-brand-subtle" />
            </div>
            <div>
              <div className="text-fg-default">Privacy & Security</div>
              <p className="mt-1 text-fg-tertiary text-sm">
                Control your data and security
              </p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4 pl-14">
            <div className="flex items-center justify-between py-2">
              <div>
                <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                <p className="mt-1 text-fg-tertiary text-sm">
                  Add extra security to your account
                </p>
              </div>
              <Switch id="two-factor" />
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <Label htmlFor="activity">Activity Log</Label>
                <p className="mt-1 text-fg-tertiary text-sm">
                  Keep track of account activity
                </p>
              </div>
              <Switch defaultChecked id="activity" />
            </div>
            <div className="flex gap-2 pt-2">
              <Button size="sm" variant="outlined">
                Change Password
              </Button>
              <Button size="sm" variant="primary">
                Download Data
              </Button>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SettingsAccordion;
