using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SquareWall
{
    public partial class Form4 : Form
    {
        private Form1 form1;
        public Form4(Form1 parentForm)
        {
            InitializeComponent();

            form1 = parentForm;
        }

        private void Form4_Load(object sender, EventArgs e)
        {

        }

        private void Form4_FormClosed(object sender, FormClosedEventArgs e)
        {
            // Quando Form2 viene chiuso, mostra nuovamente Form1
            form1.Show();
        }
    }
}
