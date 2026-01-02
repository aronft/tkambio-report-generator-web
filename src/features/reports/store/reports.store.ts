import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Report, ReportGeneratorPayload } from '../types/reports.types'
import { reportService } from '../services/reports.service'
import type { AxiosError } from 'axios'

export const useReportStore = defineStore('reports', () => {
  const isLoading = ref(false)
  const activeModal = ref<'generator' | null>(null)
  const errorMessage = ref<string | null>(null)
  const reports = ref<Report[]>([])

  async function fetchReports() {
    isLoading.value = true
    errorMessage.value = null

    try {
      const response = await reportService.getReports()
      reports.value = response.data
    } catch (errorBase: unknown) {
      const error = errorBase as AxiosError<{ message: string }>
      if (error.response) {
        errorMessage.value = error.response.data.message
      }
      throw error
    } finally {
      isLoading.value = false
    }
  }

  async function generateReport(data: ReportGeneratorPayload) {
    isLoading.value = true
    errorMessage.value = null

    try {
      const response = await reportService.generateReport(data)
      reports.value.unshift(response.data)
    } catch (errorBase: unknown) {
      const error = errorBase as AxiosError<{ message: string }>
      if (error.response) {
        errorMessage.value = error.response.data.message
      }
      throw error
    } finally {
      isLoading.value = false
    }
  }

  async function handleDownload(id: number) {
    const { data } = await reportService.getReportById(id)

    if (data.download_url) {
      window.open(data.download_url, '_blank')
    }
  }

  function closeModal() {
    activeModal.value = null
  }

  function openModal(modal: 'generator') {
    activeModal.value = modal
  }

  return {
    isLoading,
    errorMessage,
    reports,
    activeModal,
    handleDownload,
    generateReport,
    fetchReports,
    closeModal,
    openModal,
  }
})
