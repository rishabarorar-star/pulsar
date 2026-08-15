import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function createCatalogue() {
  const pdfDoc = await PDFDocument.create();
  const fontHelvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Page 1: Cover & Technical Specs
  const page = pdfDoc.addPage([595.28, 841.89]); // A4
  const { width, height } = page.getSize();

  // Dark background
  page.drawRectangle({
    x: 0,
    y: 0,
    width,
    height,
    color: rgb(0.02, 0.03, 0.05),
  });

  // Top header bar cyan accent
  page.drawRectangle({
    x: 0,
    y: height - 8,
    width,
    height: 8,
    color: rgb(0, 0.85, 1),
  });

  // Header logo & subtitle
  page.drawText('PULSAR ADVANCED ELECTRO-OPTICS', {
    x: 40,
    y: height - 50,
    size: 10,
    font: fontBold,
    color: rgb(0, 0.85, 1),
  });

  page.drawText('PRODUCT TECHNICAL SPECIFICATION CATALOGUE', {
    x: 40,
    y: height - 68,
    size: 8,
    font: fontHelvetica,
    color: rgb(0.6, 0.7, 0.8),
  });

  // Divider line
  page.drawLine({
    start: { x: 40, y: height - 80 },
    end: { x: width - 40, y: height - 80 },
    thickness: 1,
    color: rgb(0.15, 0.25, 0.35),
  });

  // Product Title
  page.drawText('PULSAR MULTIFUNCTIONAL THERMAL FUSION BINOCULAR', {
    x: 40,
    y: height - 120,
    size: 16,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  page.drawText('Model: PM-TFB-FUSION-X1 | Price: INR 14,55,000/-', {
    x: 40,
    y: height - 138,
    size: 11,
    font: fontBold,
    color: rgb(0, 0.85, 1),
  });

  // Description block
  const descText = [
    'The Pulsar Thermal Fusion Imager Binocular is a high-performance handheld electro-optical observation system',
    'designed for day and night surveillance, target detection, identification, reconnaissance and situational awareness.',
    'The system combines thermal imaging and visible-light imaging to provide enhanced observation across changing',
    'environmental and lighting conditions.'
  ];

  let yOffset = height - 170;
  descText.forEach(line => {
    page.drawText(line, {
      x: 40,
      y: yOffset,
      size: 9.5,
      font: fontHelvetica,
      color: rgb(0.8, 0.85, 0.9),
    });
    yOffset -= 14;
  });

  // Features Section Box
  yOffset -= 20;
  page.drawRectangle({
    x: 40,
    y: yOffset - 170,
    width: width - 80,
    height: 180,
    borderColor: rgb(0, 0.85, 1),
    borderWidth: 1,
    color: rgb(0.04, 0.07, 0.12),
  });

  page.drawText('KEY SYSTEM CAPABILITIES & FEATURES', {
    x: 55,
    y: yOffset - 15,
    size: 11,
    font: fontBold,
    color: rgb(0, 0.85, 1),
  });

  const features = [
    '• Pulsar thermal and visible-light imaging technology',
    '• Thermal + optical fusion imaging capability with real-time blending',
    '• Day and night observation support across changing light levels',
    '• High-resolution image display with crisp OLED ocular viewports',
    '• Long-range detection, observation and reconnaissance capabilities',
    '• Digital zoom and advanced image enhancement controls',
    '• Compact, portable, ergonomic handheld binocular configuration',
    '• Rugged field-ready construction for tactical and harsh environments',
    '• High-capacity rechargeable battery operation for extended mission runtime',
    '• Optimized for Defence, Border Surveillance, Security & Search/Rescue'
  ];

  let featY = yOffset - 35;
  features.forEach(f => {
    page.drawText(f, {
      x: 55,
      y: featY,
      size: 9,
      font: fontHelvetica,
      color: rgb(0.9, 0.95, 1),
    });
    featY -= 14;
  });

  // Specs Table Section
  yOffset = featY - 40;
  page.drawText('OFFICIAL PRODUCT SPECIFICATION TABLE', {
    x: 40,
    y: yOffset,
    size: 11,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  yOffset -= 15;
  const specs = [
    ['Product Name', 'Pulsar Multifunctional Thermal Fusion Binocular'],
    ['Product Category', 'Thermal Fusion Imager Binocular'],
    ['Imaging Channels', 'Thermal Imaging + Visible-Light Optical'],
    ['Operating Conditions', 'Day / Night / All-Weather Environment'],
    ['Form Factor', 'Handheld Binocular Configuration'],
    ['Zoom Mechanism', 'Digital Zoom & Image Enhancement'],
    ['Power Source', 'Rechargeable High-Capacity Battery System'],
    ['Construction', 'Compact / Rugged / Portable Tactical Housing'],
    ['Primary Applications', 'Surveillance / Reconnaissance / Security / Search & Rescue'],
    ['Standard Price', 'INR 14,55,000/- (Inclusive of standard field kit)']
  ];

  specs.forEach(([label, val], idx) => {
    const rowY = yOffset - (idx * 22);
    page.drawRectangle({
      x: 40,
      y: rowY - 5,
      width: width - 80,
      height: 20,
      color: idx % 2 === 0 ? rgb(0.06, 0.09, 0.14) : rgb(0.03, 0.05, 0.08),
      borderColor: rgb(0.1, 0.18, 0.25),
      borderWidth: 0.5,
    });

    page.drawText(label, {
      x: 50,
      y: rowY,
      size: 9,
      font: fontBold,
      color: rgb(0, 0.85, 1),
    });

    page.drawText(val, {
      x: 200,
      y: rowY,
      size: 9,
      font: fontHelvetica,
      color: rgb(0.9, 0.9, 0.9),
    });
  });

  // Footer section
  page.drawText('CONFIDENTIAL & PROPRIETARY — FOR AUTHORIZED DIRECT ENQUIRIES ONLY', {
    x: 40,
    y: 35,
    size: 7.5,
    font: fontOblique,
    color: rgb(0.5, 0.6, 0.7),
  });

  page.drawText('PULSAR ELECTRO-OPTICS DIVISION © 2026', {
    x: width - 210,
    y: 35,
    size: 7.5,
    font: fontBold,
    color: rgb(0.5, 0.6, 0.7),
  });

  const pdfBytes = await pdfDoc.save();
  const dir = path.join(process.cwd(), 'public', 'catalogue');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(path.join(dir, 'pulsar-thermal-fusion-binocular.pdf'), pdfBytes);
  console.log('PDF Catalogue successfully generated at public/catalogue/pulsar-thermal-fusion-binocular.pdf');
}

createCatalogue();
