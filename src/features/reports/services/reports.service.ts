import api from '@/core/services/api/axios'
import type { ApiResponse } from '@/core/types/api-response'
import type { Report, ReportGeneratorPayload } from '../types/reports.types'

export const reportService = {
  async getReports(): Promise<ApiResponse<Report[]>> {
    const { data } = await api.get<ApiResponse<Report[]>>('/reports')
    return data
  },

  async generateReport(payload: ReportGeneratorPayload): Promise<ApiResponse<Report>> {
    const { data } = await api.post<ApiResponse<Report>>('/reports', {
      title: payload.title,
      date_init: payload.dateInit,
      date_end: payload.dateEnd,
    })
    return data
  },

  async getReportById(id: number): Promise<ApiResponse<Report>> {
    const { data } = await api.get<ApiResponse<Report>>(`/reports/${id}`)
    return data
  },
}
