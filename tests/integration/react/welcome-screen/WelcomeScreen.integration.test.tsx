/**
 * Copyright (c) 2026 SolisWare.
 *
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { defaultAppSettings } from "../../../../src/settings/defaultSettings";
import { SystemTheme } from "../../../../src/theme/SystemTheme";
import MainWindow from "../../../../src/views/MainWindow/MainWindow";
import { installDesktopApiMock } from "../../../utils/electron/createDesktopApiMock";

const { translate } = vi.hoisted(() => {
  const translations: Record<string, string> = {
    "mainWindow.welcome.title": "Welcome to Axion Notes",
    "mainWindow.welcome.intro": "Keep quick thoughts close, tidy, and ready whenever you need them.",
    "mainWindow.welcome.getStarted": "Get Started",
    "mainWindow.welcome.doNotShowAgain": "Do not show this welcome screen again",
    "mainWindow.welcome.preview.today": "Today",
    "mainWindow.welcome.preview.freshWorkspace": "Fresh workspace",
    "mainWindow.welcome.preview.ideas": "Ideas",
    "mainWindow.welcome.preview.colorfulNotes": "Colorful notes",
    "mainWindow.welcome.preview.next": "Next",
    "mainWindow.toolbar.newNote": "New Note",
    "mainWindow.emptyNotes.title": "You don't have any notes yet!"
  };

  return {
    translate: vi.fn((key: string) => translations[key] ?? key)
  };
});

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: translate
  })
}));

vi.mock("../../../../src/App", () => ({
  AppView: {
    home: "/home",
    welcome: "/welcome",
    lock: "/lock",
    license: "/license"
  }
}));

describe("WelcomeScreen integration", () => {
  beforeEach(() => {
    translate.mockClear();
    installDesktopApiMock();
  });

  describe("welcome route rendering", () => {
    it("renders the Welcome screen when MainWindow is on the welcome view", () => {
      renderMainWindow();

      expect(screen.getByRole("heading", { name: "Welcome to Axion Notes" })).toBeInTheDocument();
      expect(screen.getByText("Keep quick thoughts close, tidy, and ready whenever you need them.")).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /get started/i })).toBeInTheDocument();
    });

    it("does not render the web toolbar on the welcome view", () => {
      renderMainWindow();

      expect(screen.queryByRole("button", { name: "New Note" })).not.toBeInTheDocument();
    });

    it("does not render the empty notes home state behind the Welcome screen", () => {
      renderMainWindow();

      expect(screen.queryByText("You don't have any notes yet!")).not.toBeInTheDocument();
    });
  });
});

function renderMainWindow() {
  return render(
    <MemoryRouter initialEntries={["/welcome"]}>
      <MainWindow
        appSettings={defaultAppSettings}
        onAppSettingsChange={vi.fn()}
        theme={SystemTheme.LIGHT}
        view={"/welcome" as never}
      />
    </MemoryRouter>
  );
}
