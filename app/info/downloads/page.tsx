'use client';
import React from 'react';
import Link from 'next/link';
import InfoLayout from '../InfoLayout';
import { colors, fontSizes, spacing, radius, sharedStyles } from '../theme';

interface DownloadOptionProps {
  title: string;
  comingSoon?: boolean;
  downloadUrl?: string;
}

const DownloadOption = ({ title, comingSoon = false, downloadUrl }: DownloadOptionProps) => (
  <div style={downloadOptionStyle}>
    <h3 style={{ margin: 0, fontSize: fontSizes.md }}>{title}</h3>
    {comingSoon && <span style={disabledBadgeStyle}>Bald verfügbar</span>}
    {downloadUrl && (
      <a href={downloadUrl} style={downloadButtonStyle} download>
        Herunterladen
      </a>
    )}
  </div>
);

export default function DownloadsPage() {
  return (
    <InfoLayout title="OrdoServus Downloads">
      <header style={sharedStyles.pageHeader}>
        <h1 style={sharedStyles.h1}>OrdoServus herunterladen</h1>
        <p style={sharedStyles.subtitle}>
          OrdoServus ist eine herunterladbare Software für Desktop und Mobilgeräte. Online stehen dir Notizbuch und Kalender zur Verfügung, damit du sie immer dabei hast.
        </p>
      </header>

      {/* Web App */}
      <div style={webAppCardStyle}>
        <h2>Online-Version: Notizbuch und Kalender</h2>
        <p>Nutze Notizbuch und Kalender online, um sie immer dabei zu haben. Keine Installation notwendig.</p>
        <Link href="/" style={sharedStyles.buttonPrimary}>
          Online-Version starten
        </Link>
      </div>

      {/* Desktop & Mobile */}
      <div style={appsContainerStyle}>
        <div style={categoryStyle}>
          <h2 style={categoryTitleStyle}>Desktop</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.md }}>
            <DownloadOption title="Windows" downloadUrl="https://github.com/ordoservus/desktop/releases/latest/download/Installer.exe" />
            <DownloadOption title="macOS" comingSoon />
            <DownloadOption title="Linux" comingSoon />
          </div>
        </div>

        <div style={categoryStyle}>
          <h2 style={categoryTitleStyle}>Mobil</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.md }}>
            <DownloadOption title="iOS" comingSoon />
            <DownloadOption title="Android" comingSoon />
          </div>
        </div>
      </div>
    </InfoLayout>
  );
}

const webAppCardStyle: React.CSSProperties = {
  ...sharedStyles.contentCard,
  textAlign: 'center',
  marginBottom: spacing.xl,
};

const appsContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: spacing.lg,
};

const categoryStyle: React.CSSProperties = {
  flex: '1 1 300px',
  minWidth: '280px',
};

const categoryTitleStyle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: spacing.md,
  fontSize: fontSizes.xl,
  color: colors.primary,
};

const downloadOptionStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: colors.bgPage,
  padding: `15px ${spacing.md}`,
  borderRadius: radius.md,
  border: `1px solid ${colors.border}`,
};

const disabledBadgeStyle: React.CSSProperties = {
  padding: '8px 15px',
  backgroundColor: '#ecf0f1',
  color: '#bdc3c7',
  borderRadius: radius.sm,
  fontWeight: 'bold',
  fontSize: fontSizes.sm,
};

const downloadButtonStyle: React.CSSProperties = {
  padding: '8px 15px',
  backgroundColor: colors.primary,
  color: '#ffffff',
  borderRadius: radius.sm,
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: 'background-color 0.2s',
};
