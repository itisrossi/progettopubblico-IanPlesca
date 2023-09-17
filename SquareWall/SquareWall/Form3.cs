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
    public partial class Form3 : Form
    {
        private Form1 form1;
        public Form3(Form1 parentForm)
        {
            InitializeComponent();

            form1 = parentForm;
        }

        private void Form3_Load(object sender, EventArgs e)
        {

        }

        private void Form3_FormClosed(object sender, FormClosedEventArgs e)
        {
            // Quando Form2 viene chiuso, mostra nuovamente Form1
            form1.Show();
        }
    }
}
