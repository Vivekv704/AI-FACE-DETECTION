export const drawRect = (detections, ctx) => {
    detections.forEach(prediction => {
        // Get prediction result
        const [x, y, width, height] = prediction['bbox'];
        const text = prediction['class'];

        // Set styling
        const color = 'green';
        ctx.strokeStyle = color;
        ctx.font = '25px Arial';
        ctx.fillStyle = color;

        // Draw rectangle
        ctx.beginPath();
        ctx.fillText(text, x, y);
        ctx.rect(x, y, width, height);
        ctx.stroke();
    });
};
