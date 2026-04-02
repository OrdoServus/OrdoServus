'use client';
import React from 'react';
import InfoLayout from '../../InfoLayout';
import { colors, fontSizes, sharedStyles } from '../../theme';

export default function DatenschutzPage() {
  return (
    <InfoLayout title="Datenschutzerklärung" backHref="/info">
      <header style={sharedStyles.pageHeader}>
        <h1 style={sharedStyles.h1}>Datenschutzerklärung</h1>
        <p style={{ fontSize: fontSizes.base, color: colors.textMuted, textAlign: 'center' }}>
          <em>Stand: April 2026</em>
        </p>
      </header>

      <section style={sharedStyles.contentCard}>
        <div style={sharedStyles.section}>
          <h2 style={sharedStyles.h2}>1. Verantwortliche Stelle</h2>
          <p>Verantwortlich für die Verarbeitung personenbezogener Daten im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
          <p style={{ fontWeight: 'bold', fontSize: fontSizes.md }}>
            OrdoServus<br />
            E-Mail: ordo.servus@gmx.ch
          </p>
          <p>Bei Fragen zum Datenschutz können Sie uns jederzeit über die angegebenen Kontaktwege erreichen.</p>
        </div>

        <div style={sharedStyles.section}>
          <h2 style={sharedStyles.h2}>2. Datenschutzbeauftragter</h2>
          <p>Bei datenschutzrechtlichen Fragen erreichen Sie uns direkt über die oben genannten Kontaktdaten.</p>
        </div>

        <div style={sharedStyles.section}>
          <h2 style={sharedStyles.h2}>3. Zweck der Datenverarbeitung</h2>
          <p>OrdoServus ist eine Webanwendung zur Unterstützung pastoraler und liturgischer Tätigkeiten. Die Verarbeitung personenbezogener Daten erfolgt zu folgenden Zwecken:</p>
          <ul style={sharedStyles.ul}>
            <li><strong>Bereitstellung und Betrieb der Anwendung:</strong> Ermöglichung der Nutzung von Notizbuch, Kalender und anderen Funktionen</li>
            <li><strong>Benutzerkonto-Verwaltung:</strong> Registrierung, Authentifizierung und Verwaltung von Benutzerkonten</li>
            <li><strong>Inhaltsverwaltung:</strong> Speicherung und Verwaltung von Notizen, Kalendereinträgen und anderen Benutzerinhalten</li>
            <li><strong>Fehleranalyse und Verbesserung:</strong> Erkennung und Behebung von technischen Problemen (über Bugfender)</li>
            <li><strong>Sicherheit und Stabilität:</strong> Gewährleistung der Sicherheit der Anwendung und Verhinderung von Missbrauch</li>
            <li><strong>Kommunikation:</strong> Beantwortung von Support-Anfragen und Bereitstellung von Informationen</li>
          </ul>
        </div>

        <div style={sharedStyles.section}>
          <h2 style={sharedStyles.h2}>4. Erhobene personenbezogene Daten</h2>

          <h3>4.1 Von Ihnen aktiv bereitgestellte Daten</h3>
          <ul style={sharedStyles.ul}>
            <li><strong>Kontodaten:</strong> E-Mail-Adresse, Benutzername, Passwort</li>
            <li><strong>Profildaten:</strong> Vorname, Nachname, Rolle, Land, Kirchengemeinde</li>
            <li><strong>Inhaltsdaten:</strong> Notizen, Kalendereinträge, Beschreibungen, Titel</li>
            <li><strong>Kommunikationsdaten:</strong> Nachrichten über Kontaktformulare (verarbeitet durch Formspree)</li>
          </ul>

          <h3>4.2 Automatisch erfasste Daten</h3>
          <ul style={sharedStyles.ul}>
            <li><strong>Technische Daten:</strong> IP-Adresse, Browser-Typ, Betriebssystem, Geräte-Informationen</li>
            <li><strong>Nutzungsdaten:</strong> Zugriffszeiten, verwendete Funktionen, Fehlerberichte (über Bugfender)</li>
            <li><strong>Cookies und ähnliche Technologien:</strong> Siehe Abschnitt 10</li>
          </ul>
        </div>

        <div style={sharedStyles.section}>
          <h2 style={sharedStyles.h2}>5. Speicherdauer</h2>
          <p>Die Speicherdauer Ihrer Daten richtet sich nach den folgenden Kriterien:</p>
          <ul style={sharedStyles.ul}>
            <li><strong>Kontodaten:</strong> Solange das Benutzerkonto besteht oder bis zur Löschung</li>
            <li><strong>Inhaltsdaten:</strong> Solange das Benutzerkonto besteht oder bis zur Löschung der Inhalte</li>
            <li><strong>Technische Logs:</strong> Maximal 12 Monate für Sicherheitszwecke</li>
            <li><strong>Kommunikationsdaten:</strong> Bis zur endgültigen Beantwortung und maximal 3 Jahre zur Nachweissicherung</li>
          </ul>
          <p>Daten werden gelöscht, sobald sie für die genannten Zwecke nicht mehr erforderlich sind, es sei denn, gesetzliche Aufbewahrungspflichten stehen dem entgegen.</p>
        </div>

        <div style={sharedStyles.section}>
          <h2 style={sharedStyles.h2}>6. Empfänger der Daten</h2>

          <h3>6.1 Dienstleister</h3>
          <p>Wir nutzen folgende Dienstleister für den Betrieb unserer Anwendung:</p>

          <p><strong>Vercel Inc.:</strong> Hosting und Content Delivery Network<br />
          Serverstandorte: EU und USA<br />
          Verarbeitete Daten: IP-Adressen, Zugriffslogs<br />
          Datenschutz: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: colors.accent }}>Vercel Privacy Policy</a></p>

          <p><strong>Google Firebase (Google Ireland Limited):</strong> Authentifizierung und Datenbank<br />
          Serverstandorte: EU<br />
          Verarbeitete Daten: Benutzerdaten, Inhalte<br />
          Datenschutz: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" style={{ color: colors.accent }}>Firebase Privacy Policy</a></p>

          <p><strong>Formspree:</strong> Kontaktformular-Verarbeitung<br />
          Serverstandorte: USA<br />
          Verarbeitete Daten: Name, E-Mail-Adresse, Nachrichtentext<br />
          Datenschutz: <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: colors.accent }}>Formspree Privacy Policy</a></p>

          <p><strong>Bugfender:</strong> Fehlerberichterstattung und Debugging<br />
          Serverstandorte: EU<br />
          Verarbeitete Daten: Geräte-Informationen, Fehlerlogs, Nutzungsdaten<br />
          Datenschutz: <a href="https://bugfender.com/privacy-policy/" target="_blank" rel="noopener noreferrer" style={{ color: colors.accent }}>Bugfender Privacy Policy</a></p>

          <h3>6.2 Keine Weitergabe an Dritte</h3>
          <p>Ihre Daten werden nicht an andere Unternehmen für deren eigene Zwecke weitergegeben. Eine Übermittlung erfolgt nur:</p>
          <ul style={sharedStyles.ul}>
            <li>Mit Ihrer ausdrücklichen Einwilligung</li>
            <li>Aufgrund gesetzlicher Verpflichtungen</li>
            <li>Zur Durchsetzung unserer Nutzungsbedingungen</li>
            <li>Zum Schutz unserer Rechte und der Rechte Dritter</li>
          </ul>
        </div>

        <div style={sharedStyles.section}>
          <h2 style={sharedStyles.h2}>7. Internationale Datenübermittlung</h2>
          <p>Durch die Nutzung von Vercel und Formspree können Daten in die USA übermittelt werden. Die USA gelten nach Ansicht der Europäischen Kommission als Drittland ohne angemessenes Datenschutzniveau. Wir haben mit Vercel die EU-Standardvertragsklauseln abgeschlossen, um ein angemessenes Datenschutzniveau zu gewährleisten. Bei Formspree erfolgt die Datenübermittlung auf Basis der Privacy Shield Zertifizierung.</p>
        </div>

        <div style={sharedStyles.section}>
          <h2 style={sharedStyles.h2}>8. Sicherheit der Datenverarbeitung</h2>
          <p>Wir setzen folgende Sicherheitsmaßnahmen ein:</p>
          <ul style={sharedStyles.ul}>
            <li><strong>Verschlüsselung:</strong> HTTPS/TLS-Verschlüsselung für alle Datenübertragungen</li>
            <li><strong>Serverseitige Verschlüsselung:</strong> Daten werden in Firebase verschlüsselt gespeichert</li>
            <li><strong>Zugriffskontrollen:</strong> Strenge Zugriffsrechte und Authentifizierungsmechanismen</li>
            <li><strong>Regelmäßige Sicherheitsupdates:</strong> Laufende Aktualisierung der Systeme</li>
            <li><strong>Datensicherungen:</strong> Regelmäßige Backups zur Datensicherung</li>
          </ul>
        </div>

        <div style={sharedStyles.section}>
          <h2 style={sharedStyles.h2}>9. Cookies und ähnliche Technologien</h2>

          <h3>9.1 Arten von Cookies</h3>
          <ul style={sharedStyles.ul}>
            <li><strong>Technisch notwendige Cookies:</strong> Für die Grundfunktionalität der Anwendung (z.B. Login-Session)</li>
            <li><strong>Analyse-Cookies:</strong> Zur Verbesserung der Anwendung (derzeit nicht verwendet)</li>
            <li><strong>Marketing-Cookies:</strong> Werden nicht verwendet</li>
          </ul>

          <h3>9.2 Cookie-Einstellungen</h3>
          <p>Sie können Cookies in Ihrem Browser deaktivieren. Bitte beachten Sie, dass die Anwendung ohne technisch notwendige Cookies möglicherweise nicht ordnungsgemäß funktioniert.</p>
        </div>

        <div style={sharedStyles.section}>
          <h2 style={sharedStyles.h2}>10. Ihre Rechte als Betroffener</h2>
          <p>Nach der DSGVO stehen Ihnen folgende Rechte zu:</p>

          <h3>10.1 Auskunftsrecht (Art. 15 DSGVO)</h3>
          <p>Sie haben das Recht, Auskunft über die Verarbeitung Ihrer personenbezogenen Daten zu erhalten.</p>

          <h3>10.2 Recht auf Berichtigung (Art. 16 DSGVO)</h3>
          <p>Sie haben das Recht, unrichtige Daten berichtigen oder unvollständige Daten vervollständigen zu lassen.</p>

          <h3>10.3 Recht auf Löschung (Art. 17 DSGVO)</h3>
          <p>Sie haben das Recht, die Löschung Ihrer Daten zu verlangen ("Recht auf Vergessenwerden").</p>

          <h3>10.4 Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</h3>
          <p>Sie haben das Recht, die Verarbeitung Ihrer Daten einschränken zu lassen.</p>

          <h3>10.5 Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</h3>
          <p>Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</p>

          <h3>10.6 Widerspruchsrecht (Art. 21 DSGVO)</h3>
          <p>Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Widerspruch einzulegen.</p>

          <h3>10.7 Beschwerderecht</h3>
          <p>Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen die DSGVO verstößt.</p>

          <p><strong>Um Ihre Rechte auszuüben, kontaktieren Sie uns bitte über die angegebenen Kontaktdaten.</strong></p>
        </div>

        <div style={sharedStyles.section}>
          <h2 style={sharedStyles.h2}>11. Externe Links</h2>
          <p>Unsere Website kann Links zu anderen Websites enthalten. Wir haben keinen Einfluss auf die Datenschutzpraktiken dieser Websites und übernehmen keine Verantwortung für deren Datenschutzrichtlinien oder -praktiken.</p>
        </div>

        <div style={sharedStyles.section}>
          <h2 style={sharedStyles.h2}>12. Änderungen dieser Datenschutzerklärung</h2>
          <p>Wir behalten uns das Recht vor, diese Datenschutzerklärung anzupassen, um sie an geänderte rechtliche Anforderungen oder neue Funktionen anzupassen. Die aktuelle Version ist immer auf unserer Website verfügbar. Bei wesentlichen Änderungen werden wir Sie entsprechend informieren.</p>
        </div>

        <div style={sharedStyles.section}>
          <h2 style={sharedStyles.h2}>13. Kontakt</h2>
          <p>Bei Fragen zu dieser Datenschutzerklärung oder zur Verarbeitung Ihrer Daten kontaktieren Sie uns bitte:</p>
          <p style={{ fontWeight: 'bold' }}>
            OrdoServus<br />
            E-Mail: ordo.servus@gmx.ch<br />
            Kontaktformular: <a href="/info/kontakt" style={{ color: colors.accent }}>Zur Kontaktseite</a>
          </p>
        </div>
      </section>
    </InfoLayout>
  );
}