"use client"

import { useEffect, useRef } from "react"

export default function Silk({ speed = 5, scale = 1, color = "#6366f1", noiseIntensity = 1, rotation = 0 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId
    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resize()
    window.addEventListener("resize", resize)

    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return result
        ? {
          r: Number.parseInt(result[1], 16),
          g: Number.parseInt(result[2], 16),
          b: Number.parseInt(result[3], 16),
        }
        : { r: 99, g: 102, b: 241 }
    }

    const rgb = hexToRgb(color)

    const animate = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      time += speed * 0.001

      // Create flowing gradient effect
      const gradient = ctx.createLinearGradient(
        Math.sin(time) * width * 0.5 + width * 0.5,
        Math.cos(time * 0.7) * height * 0.5 + height * 0.5,
        Math.cos(time * 1.2) * width * 0.5 + width * 0.5,
        Math.sin(time * 0.9) * height * 0.5 + height * 0.5,
      )

      // Create silk-like color variations
      gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.8)`)
      gradient.addColorStop(0.3, `rgba(${rgb.r + 20}, ${rgb.g + 20}, ${rgb.b + 30}, 0.9)`)
      gradient.addColorStop(0.6, `rgba(${rgb.r - 10}, ${rgb.g - 10}, ${rgb.b + 20}, 0.85)`)
      gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.8)`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Add flowing wave patterns
      ctx.globalCompositeOperation = "overlay"
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        for (let x = 0; x < width; x += 5) {
          const y =
            Math.sin((x * 0.01 + time * (1 + i * 0.3)) * scale) * 50 * noiseIntensity +
            Math.cos((x * 0.008 + time * (0.8 + i * 0.2)) * scale) * 30 * noiseIntensity +
            height * 0.5
          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 * noiseIntensity})`
        ctx.lineWidth = 2
        ctx.stroke()
      }

      ctx.globalCompositeOperation = "source-over"

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [speed, scale, color, noiseIntensity, rotation])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    />
  )
}
