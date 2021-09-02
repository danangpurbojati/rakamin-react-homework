import React from 'react';
// import DashboardLayout from '../../component/DashboardLayout';
import { from, Button, Select } from 'webpack-sources/lib/CompatSource';
import 'frontend-b-queue-management\src\pages\BookAntrian\bookAntrian.scss';

const BookAntrian = () => {
    return (
        <DashboardLayout>
            <div className="contentBook">
                <h1 style="text-align: center; margin-bottom: 50px;">Book Nomor Antrian</h1>
                <div className="container">
                <p>Book antrian untuk besok (Jum'at, 9 Juni 2021)</p>
                <Form>
                    {/* input pilihan bank */}
                    <div className="bankTujuan">
                        <p>Bank Tujuan &emsp;&emsp;&emsp;&emsp;:
                        
                        <select
                            name="pilihbank"
                            id="pilihbanktujuan"
                            className="form-control" 
                            style="width: 22vw; height: 25px; border: none ;"
                        >   
                            <option value=" " disabled selected style="color: gray;">
                            -Ketik atau Pilih Unit Kerja/Kantor Cabang-</option>
                            <option value='Bank-KCP-Soreang'>Bank KCP Soreang</option>
                            <option value='Bank-KCP-Banjaran'>Bank KCP Banjaran</option>
                        </select>
                        </p>
                    </div>

                    {/* input pilihan layanan */}
                    <div className="keperluan">
                        <p>Keperluan Layanan &emsp;:

                        <select
                            name="keperluan"
                            id="keperluanlayanan"
                            className="form-control" 
                            style="width: 22vw; height: 25px; border: none ;"
                        >
                            <option value=" " disabled selected style="color: gray;">-Pilih Layanan-</option>
                            <option value='CS'>Pendaftaran (dilayani oleh Customer Services)</option>
                            <option value='Teller'>Transaksi (dilayani oleh Teller)</option>
                            <option value="Kredit">Pinjaman (dilayani oleh Petugas Kredit)</option>
                        </select>
                        </p>
                    </div>
                    <Button type="primary">Dapatkan Nomor Antrian</Button>

                </Form>
                </div>
            </div>

        </DashboardLayout>
    )
}

export default BookAntrian