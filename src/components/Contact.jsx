import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { schoolData } from '../data/schoolData';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({
        loading: false,
        success: false,
        error: false
    });

    const [formData, setFormData] = useState({
        "Parent Name": "",
        "Child Name": "",
        "Phone": "",
        "Program": "Playgroup",
        "Message": ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormState({ loading: true, success: false, error: false });

        const scriptURL = "https://script.google.com/macros/s/AKfycbxaOxWl7MW2FSmWt5lGOiLtKzAApHQajLDZtDDMeO8V0E4P3PsdxNsIgdNPmM6u2A0phQ/exec"; // Replace with your actual Google Script URL

        try {
            const response = await fetch(scriptURL, {
                method: "POST",
                body: new FormData(e.target), // Uses keys from input 'name' attributes
                // No headers needed for this simple no-cors request usually, or follow specific Google Script CORS patterns
            });

            // Google Apps Script simple POST often returns opaque response with 'no-cors' mode 
            // but standard fetch might fail CORS if not handled. 
            // For simple usage, we assume success if no network error.

            setFormState({ loading: false, success: true, error: false });
            setFormData({
                "Parent Name": "",
                "Child Name": "",
                "Phone": "",
                "Program": "Playgroup",
                "Message": ""
            });

            setTimeout(() => {
                setFormState(prev => ({ ...prev, success: false }));
            }, 5000);

        } catch (error) {
            console.error("Error!", error.message);
            setFormState({ loading: false, success: false, error: true });
        }
    };

    return (
        <Section
            id="contact"
            title="Get in Touch"
            subtitle="We'd love to hear from you. Schedule a visit or ask us anything."
            className="bg-[var(--color-bg-cream)]"
        >
            <div className="grid md:grid-cols-2 gap-12">

                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-bold mb-6 text-[var(--color-primary-green)]">Contact Information</h3>

                        <div className="space-y-6">
                            <a href={`tel:${schoolData.contact.phone}`} className="flex items-center gap-4 text-[var(--color-text-muted)] hover:text-[var(--color-primary-green)] transition-colors">
                                <div className="w-12 h-12 rounded-full bg-[#f1f8e9] flex items-center justify-center text-[var(--color-primary-green)]">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-400">Call Us</p>
                                    <p className="text-lg font-medium">{schoolData.contact.phone}</p>
                                </div>
                            </a>

                            <a href={`mailto:${schoolData.contact.email}`} className="flex items-center gap-4 text-[var(--color-text-muted)] hover:text-[var(--color-primary-green)] transition-colors">
                                <div className="w-12 h-12 rounded-full bg-[#f1f8e9] flex items-center justify-center text-[var(--color-primary-green)]">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-400">Email Us</p>
                                    <p className="text-lg font-medium">{schoolData.contact.email}</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 text-[var(--color-text-muted)]">
                                <div className="w-12 h-12 rounded-full bg-[#f1f8e9] flex items-center justify-center text-[var(--color-primary-green)]">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-400">Visit Us</p>
                                    <p className="text-lg font-medium max-w-xs">{schoolData.contact.address}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <p className="font-semibold mb-4 text-[var(--color-text-dark)]">Follow our journey</p>
                            <div className="flex gap-4">
                                <a href={schoolData.contact.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--color-text-dark)] text-white flex items-center justify-center hover:bg-[var(--color-primary-green)] transition-colors" aria-label="Instagram">
                                    <Instagram size={20} />
                                </a>
                                <a href={schoolData.contact.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--color-text-dark)] text-white flex items-center justify-center hover:bg-[var(--color-primary-green)] transition-colors" aria-label="Facebook">
                                    <Facebook size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Inquiry Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-3xl shadow-lg border border-[#e0e0e0]"
                >
                    <h3 className="text-2xl font-bold mb-2 text-[var(--color-primary-green)]">Admissions Inquiry</h3>
                    <p className="text-gray-500 mb-6">Fill out the form below and we'll get back to you shortly.</p>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Parent's Name</label>
                                <input
                                    type="text"
                                    name="Parent Name"
                                    value={formData["Parent Name"]}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary-green)] focus:ring-2 focus:ring-[var(--color-primary-green)]/20 outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Child's Name</label>
                                <input
                                    type="text"
                                    name="Child Name"
                                    value={formData["Child Name"]}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary-green)] focus:ring-2 focus:ring-[var(--color-primary-green)]/20 outline-none transition-all"
                                    placeholder="Jane"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <input
                                    type="tel"
                                    name="Phone"
                                    value={formData["Phone"]}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary-green)] focus:ring-2 focus:ring-[var(--color-primary-green)]/20 outline-none transition-all"
                                    placeholder="+91..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Program</label>
                                <select
                                    name="Program"
                                    value={formData["Program"]}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary-green)] focus:ring-2 focus:ring-[var(--color-primary-green)]/20 outline-none transition-all bg-white"
                                >
                                    <option>Playgroup</option>
                                    <option>Nursery</option>
                                    <option>Kindergarten</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                rows="4"
                                name="Message"
                                value={formData["Message"]}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary-green)] focus:ring-2 focus:ring-[var(--color-primary-green)]/20 outline-none transition-all"
                                placeholder="Any specific questions?"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={formState.loading || formState.success}
                            className={`w-full btn py-4 text-lg mt-2 flex items-center justify-center gap-2 ${formState.success ? 'bg-green-600' : 'btn-primary'}`}
                        >
                            {formState.loading ? (
                                <span className="inline-block w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            ) : formState.success ? (
                                <span>Sent Successfully!</span>
                            ) : (
                                "Send Inquiry"
                            )}
                        </button>
                    </form>
                </motion.div>

            </div>
            {/* Google Map */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-[400px] w-full"
            >
                <iframe
                    src="https://maps.google.com/maps?q=Peepul+Tree+PreSchool+Palakkad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Peepul Tree School Location"
                ></iframe>
            </motion.div>
        </Section>
    );
};

export default Contact;
